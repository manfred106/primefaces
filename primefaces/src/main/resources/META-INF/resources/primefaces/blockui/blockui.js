/**
 * __PrimeFaces BlockUI Widget__
 *
 * BlockUI is used to block interactivity of JSF components with optional AJAX integration.
 *
 * @prop {JQuery} target The DOM element for the overlay that blocks the UI.
 * @prop {JQuery} content The DOM element for the content of the blocker.
 * @prop {JQuery} blocker The DOM element for the content of the blocking overlay.
 *
 * @interface {PrimeFaces.widget.BlockUICfg} cfg The configuration for the {@link  BlockUI| BlockUI widget}.
 * You can access this configuration via {@link PrimeFaces.widget.BaseWidget.cfg|BaseWidget.cfg}. Please note that this
 * configuration is usually meant to be read-only and should not be modified.
 * @extends {PrimeFaces.widget.BaseWidgetCfg} cfg
 *
 * @prop {boolean} cfg.animate When disabled, displays block without animation effect.
 * @prop {boolean} cfg.blocked Blocks the UI by default when enabled.
 * @prop {string} cfg.block Search expression for block targets.
 * @prop {string} cfg.styleClass Style class of the component.
 * @prop {string} cfg.triggers Search expression of the components to bind.
 */
PrimeFaces.widget.BlockUI = PrimeFaces.widget.BaseWidget.extend({

    /**
     * @override
     * @inheritdoc
     * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
     */
    init: function(cfg) {
        this._super(cfg);

        this.target = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(this.cfg.block);
        this.content = this.jq;
        this.cfg.animate = (this.cfg.animate === false) ? false : true;
        this.cfg.blocked = (this.cfg.blocked === true) ? true : false;

        this.render();

        if (this.cfg.triggers) {
            this.bindTriggers();
        }

        if (this.cfg.blocked) {
            this.show();
        }
    },

    /**
     * @override
     * @inheritdoc
     * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
     */
    refresh: function(cfg) {
        this._cleanup();

        this._super(cfg);
    },

    /**
     * @override
     * @inheritdoc
     */
    destroy: function() {
        this._super();

        this._cleanup();
    },

    /**
     * Clean up this widget and remove elements from DOM.
     * @private
     */
    _cleanup: function() {
        this.blocker.remove();
        this.target.children('.ui-blockui-content').remove();
        $(document).off('pfAjaxSend.' + this.id + ' pfAjaxComplete.' + this.id);
    },

    /**
     * Sets up the global event listeners on the document.
     * @private
     */
    bindTriggers: function() {
        var $this = this;

        //listen global ajax send and complete callbacks
        $(document).on('pfAjaxSend.' + this.id, function(e, xhr, settings) {
            if (!$this.cfg.blocked && $this.isXhrSourceATrigger(settings)) {
                $this.show();
            }
        }).on('pfAjaxComplete.' + this.id, function(e, xhr, settings) {
            if (!$this.cfg.blocked && $this.isXhrSourceATrigger(settings)) {
                $this.hide();
            }
        });
    },

    /**
     * Checks whether one of component's triggers equals the source ID from the provided settings.
     *
     * @param {JQuery.AjaxSettings} settings containing source ID.
     * @returns {boolean} `true` if if one of component's triggers equals the source ID from the provided settings.
     */
    isXhrSourceATrigger: function(settings) {
        var sourceId = PrimeFaces.ajax.Utils.getSourceId(settings);
        if (!sourceId) {
            return false;
        }
        // we must evaluate it each time as the DOM might has been changed
        var triggers = PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.cfg.triggers);

        return $.inArray(sourceId, triggers) !== -1;
    },

    /**
     * Show the component with optional duration animation.
     *
     * @param {number | string} [duration] Durations are given in milliseconds; higher values indicate slower
     * animations, not faster ones. The strings `fast` and `slow` can be supplied to indicate durations of 200 and 600
     * milliseconds, respectively.
     */
    show: function(duration) {
        this.blocker.css('z-index', PrimeFaces.nextZindex());

        //center position of content
        for (var i = 0; i < this.target.length; i++) {
            var blocker = $(this.blocker[i]),
                content = $(this.content[i]);

            content.css({
                'left': ((blocker.width() - content.outerWidth()) / 2) + 'px',
                'top': ((blocker.height() - content.outerHeight()) / 2) + 'px',
                'z-index': PrimeFaces.nextZindex()
            });
        }

        var animated = this.cfg.animate;
        if (animated)
            this.blocker.fadeIn(duration);
        else
            this.blocker.show(duration);

        if (this.hasContent()) {
            if (animated)
                this.content.fadeIn(duration);
            else
                this.content.show(duration);
        }

        this.target.attr('aria-busy', true);
    },

    /**
     * Hide the component with optional duration animation.
     *
     * @param {number} [duration] Durations are given in milliseconds; higher values indicate slower animations, not
     * faster ones. The strings `fast` and `slow` can be supplied to indicate durations of 200 and 600 milliseconds,
     * respectively.
     */
    hide: function(duration) {
        var animated = this.cfg.animate;

        if (animated)
            this.blocker.fadeOut(duration);
        else
            this.blocker.hide(duration);

        if (this.hasContent()) {
            if (animated)
                this.content.fadeOut(duration);
            else
                this.content.hide(duration);
        }

        this.target.attr('aria-busy', false);
    },

    /**
     * Renders the client-side parts of this widget.
     * @private
     */
    render: function() {
        this.blocker = $('<div id="' + this.id + '_blocker" class="ui-blockui ui-widget-overlay ui-helper-hidden"></div>');

        if (this.cfg.styleClass) {
            this.blocker.addClass(this.cfg.styleClass);
        }

        if (this.target.hasClass('ui-corner-all')) {
            this.blocker.addClass('ui-corner-all');
        }

        if (this.target.length > 1) {
            this.content = this.content.clone();
        }

        var position = this.target.css("position");
        if (position !== "fixed" && position !== "absolute") {
            this.target.css('position', 'relative');
        }
        this.target.attr('aria-busy', this.cfg.blocked).append(this.blocker).append(this.content);

        if (this.target.length > 1) {
            this.blocker = $(PrimeFaces.escapeClientId(this.id + '_blocker'));
            this.content = this.target.children('.ui-blockui-content');
        }
    },

    /**
     * Checks whether the blocking overlay contains any content items.
     * @private
     * @return {boolean} `true` if this blocking overlay has got any content, `false` otherwise.
     */
    hasContent: function() {
        return this.content.contents().length > 0;
    }

});
