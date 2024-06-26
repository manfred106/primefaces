# Form Layout

Form layout is a CSS utility optimized for creating forms with ease.
FormLayout is not included in PrimeFaces as it is provided by [PrimeFlex](https://github.com/primefaces/primeflex), a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.

Note: This documentation refers to version 3.0.0 of PrimeFlex.

## Getting Started with FormLayout
Core member of the FormLayout is the `.field` class that wraps the input field and the associated label.

```xhtml
<div class="field">
    <p:outputLabel for="fieldId" value="Label" />
    <p:inputText id="fieldId" />
</div>
```

## Vertical Layout
In its simplest form, a vertical layout is created when used within `.ui-fluid` which makes the components use all available width.

```xhtml
<div class="ui-fluid">
    <div class="field">
        <p:outputLabel for="firstname" value="Firstname" />
        <p:inputText id="firstname" />
    </div>
    <div class="field">
        <p:outputLabel for="lastname" value="Lastname" />
        <p:inputText id="lastname" />
    </div>
</div>
```
## Vertical and Grid
This is where FormLayout actually hooks-in to PrimeFlex with the help of `.formgrid` class to optimize the content for form design.
Example below arranges two fields to be displayed next two each other.

```xhtml
<div class="ui-fluid formgrid grid">
    <div class="field col">
        <p:outputLabel for="firstname" value="Firstname" />
        <p:inputText id="firstname" />
    </div>
    <div class="field col">
        <p:outputLabel for="lastname" value="Lastname" />
        <p:inputText id="lastname" />
    </div>
</div>
```

## Horizontal and Fixed Width
In horizontal form, label of the field is displayed on the same row of the input as opposed to the vertical alternative.
In this example, label has a fixed width where container of the inputs gets the remaining space.

```xhtml
<div class="field grid">
    <p:outputLabel for="firstname" styleClass="col-fixed" style="width:100px" value="Firstname" />
    <div class="col">
        <p:inputText id="firstname" />
    </div>
</div>
<div class="field grid">
    <p:outputLabel for="lastname" styleClass="col-fixed" style="width:100px" value="Lastname" />
    <div class="col">
        <p:inputText id="lastname" />
    </div>
</div>
```

## Horizontal and Fluid
Wrapping the form in the previous example with `.fluid` and removing the fixed width results in a fluid layout.

```xhtml
<div class="ui-fluid">
    <div class="field grid">
        <p:outputLabel for="firstname" styleClass="col-12 md-2" value="Firstname" />
        <div class="col-12 md-10">
            <p:inputText id="firstname" />
        </div>
    </div>
    <div class="field grid">
        <p:outputLabel for="lastname" styleClass="col-12 md-2" value="Lastname" />
        <div class="col-12 md-10">
            <p:inputText id="lastname" />
        </div>
    </div>
</div>
```

## Inline
Inline forms are used to display the content on the same row and can simply be implemented by adding `.formgroup-inline` to the form container.
Note that per design requirements, if labels are not visually hidden, it is suggested to use `.ui-sr-only` to still support screen readers.

```xhtml
<div class="formgroup-inline">
    <div class="field">
        <p:outputLabel for="firstname5" styleClass="ui-sr-only" value="Firstname" />
        <p:inputText id="firstname5" placeholder="Firstname" />
    </div>
    <div class="field">
        <p:outputLabel for="lastname5" styleClass="ui-sr-only" value="Lastname" />
        <p:inputText id="lastname5" placeholder="Lastname" />
    </div>
    <p:button value="Submit" />
</div>
```

## Checkbox and RadioButton
Checkbox and RadioButton have exclusive layout support via `.field-checkbox` and `.field-radiobutton` classes respectively.
Examples here demonstrates vertical and horizontal layout alternatives.

```xhtml
<h3>Vertical Checkbox</h3>
<div class="field-checkbox">
    <p:selectBooleanCheckbox id="v_option1" />
    <p:outputLabel for="v_option1" value="Option 1" />
</div>
<div class="field-checkbox">
    <p:selectBooleanCheckbox id="v_option2" />
    <p:outputLabel for="v_option2" value="Option 2" />
</div>

<h3>Horizontal Checkbox</h3>
<div class="formgroup-inline">
    <div class="field-checkbox">
        <p:selectBooleanCheckbox id="h_option1" />
        <p:outputLabel for="h_option1" value="Option 1" />
    </div>
    <div class="field-checkbox">
        <p:selectBooleanCheckbox id="h_option2" />
        <p:outputLabel for="h_option2" value="Option 2" />
    </div>
</div>
```

## Helper text
Helper text is an optional element defined with the small tag to display additional information about the input field.

```xhtml
<div class="field ui-fluid">
    <p:outputLabel for="username" value="Username" />
    <p:inputText id="username" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>
```

## Advanced Forms
A responsive form with various input fields can easily be implemented using a combination of `.field`, `.formgrid` and `.ui-fluid`.

```xhtml
<div class="ui-fluid formgrid grid">
    <div class="field col-12 md-6">
        <p:outputLabel for="firstname" value="Firstname" />
        <p:inputText id="firstname" />
    </div>
    <div class="field col-12 md-6">
        <p:outputLabel for="lastname" value="Lastname" />
        <p:inputText id="lastname" />
    </div>
    <div class="field col-12">
        <p:outputLabel for="address" value="Address" />
        <p:inputTextarea id="address" rows="4" />
    </div>
    <div class="field col-12 md-6">
        <p:outputLabel for="city" value="City" />
        <p:inputText id="city" />
    </div>
    <div class="field col-12 md-3">
        <p:outputLabel for="state" value="State" />
        <p:selectOneMenu id="state">
            <f:selectItem itemLabel="Select One" itemValue="#{null}" noSelectionOption="true"/>
            <f:selectItem itemLabel="Option 1" itemValue="Option 1" />
            <f:selectItem itemLabel="Option 2" itemValue="Option 2" />
            <f:selectItem itemLabel="Option 3" itemValue="Option 3" />
        </p:selectOneMenu>
    </div>
    <div class="field col-12 md-3">
        <p:outputLabel for="zip" value="Zip" />
        <p:inputText id="zip" />
    </div>
</div>
```