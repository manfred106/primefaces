 /** Spanish */
 PrimeFaces.locales['es'] = {
     "startsWith": "Comience con",
     "contains": "Contenga",
     "notContains": "No contenga",
     "endsWith": "Termine con",
     "equals": "Igual a",
     "notEquals": "Diferente a",
     "noFilter": "Sin filtro",
     "lt": "Menor que",
     "lte": "Menor o igual a",
     "gt": "Mayor que",
     "gte": "Mayor o igual a",
     "dateIs": "Fecha igual a",
     "dateIsNot": "Fecha diferente a",
     "dateBefore": "Fecha antes de",
     "dateAfter": "Fecha después de",
     "custom": "Personalizar",
     "clear": "Limpiar",
     "apply": "Aplicar",
     "matchAll": "Coincidir todo",
     "matchAny": "Coincidir con cualquiera",
     "addRule": "Agregar regla",
     "removeRule": "Eliminar regla",
     "accept": "Sí",
     "reject": "No",
     "choose": "Escoger",
     "upload": "Subir",
     "cancel": "Cancelar",
     "dayNames": [
         "Domingo",
         "Lunes",
         "Martes",
         "Miércoles",
         "Jueves",
         "Viernes",
         "Sábado"
     ],
     "dayNamesShort": [
         "Dom",
         "Lun",
         "Mar",
         "Mié",
         "Jue",
         "Vie",
         "Sáb"
     ],
     "dayNamesMin": [
         "D",
         "L",
         "M",
         "X",
         "J",
         "V",
         "S"
     ],
     "monthNames": [
         "Enero",
         "Febrero",
         "Marzo",
         "Abril",
         "Mayo",
         "Junio",
         "Julio",
         "Agosto",
         "Septiembre",
         "Octubre",
         "Noviembre",
         "Diciembre"
     ],
     "monthNamesShort": [
         "Ene",
         "Feb",
         "Mar",
         "Abr",
         "May",
         "Jun",
         "Jul",
         "Ago",
         "Sep",
         "Oct",
         "Nov",
         "Dic"
     ],
     "today": "Hoy",
     "weekHeader": "Sem",
     "firstDayOfWeek": 1,
     "showMonthAfterYear": false,
     "dateFormat": "dd/mm/yy",
     "weak": "Débil",
     "medium": "Medio",
     "strong": "Fuerte",
     "passwordPrompt": "Escriba una contraseña",
     "emptyFilterMessage": "Sin opciones disponibles",
     "emptyMessage": "No se han encontrado resultados",
     "aria": {
         "trueLabel": "Verdadero",
         "falseLabel": "Falso",
         "nullLabel": "No seleccionado",
         "star": "1 estrella",
         "stars": "{star} estrellas",
         "selectAll": "Seleccionar todos",
         "unselectAll": "Deseleccionar todos",
         "close": "Cerrar",
         "previous": "Anterior",
         "next": "Siguiente",
         "navigation": "Navegación",
         "scrollTop": "Desplazarse arriba",
         "moveTop": "Mover arriba",
         "moveUp": "Subir",
         "moveDown": "Bajar",
         "moveBottom": "Desplazarse abajo",
         "moveToTarget": "Mover al objectivo",
         "moveToSource": "Mover al fuente",
         "moveAllToTarget": "Mover todo al objetivo",
         "moveAllToSource": "Mover todo al fuente",
         "pageLabel": "Página {page}",
         "firstPageLabel": "Primera Página",
         "lastPageLabel": "Última Página",
         "nextPageLabel": "Siguiente Página",
         "previousPageLabel": "Página Anterior",
         "rowsPerPageLabel": "Filas por página",
         "jumpToPageDropdownLabel": "Ir al menú desplegable de página",
         "jumpToPageInputLabel": "Ir a la entrada de página",
         "selectRow": "Seleccionar fila",
         "unselectRow": "Desmarcar fila",
         "expandRow": "Expandir Fila",
         "collapseRow": "Reducir Fila",
         "showFilterMenu": "Mostrar menú del filtro",
         "hideFilterMenu": "Ocultar menú del filtro",
         "filterOperator": "Operador de filtro",
         "filterConstraint": "Restricción de filtro",
         "editRow": "Editar fila",
         "saveEdit": "Guardar editado",
         "cancelEdit": "Cancelar editado",
         "listView": "Vista de lista",
         "gridView": "Vista de cuadrícula",
         "slide": "Deslizar",
         "slideNumber": "{slideNumber}",
         "zoomImage": "Ampliar imagen",
         "zoomIn": "Ampliar",
         "zoomOut": "Reducir",
         "rotateRight": "Girar derecha",
         "rotateLeft": "Girar izquierda"
     }
 };


 // custom PF labels
 PrimeFaces.locales['es'] = $.extend(true, {}, PrimeFaces.locales['es'], {
     weekNumberTitle: 'S',
     isRTL: false,
     yearSuffix: '',
     timeOnlyTitle: 'Sólo hora',
     timeText: 'Tiempo',
     hourText: 'Hora',
     minuteText: 'Minuto',
     secondText: 'Segundo',
     millisecondText: 'Milisegundo',
     year: 'Año',
     month: 'Mes',
     week: 'Semana',
     day: 'Día',
     list: 'Agenda',
     allDayText: 'Todo el día',
     moreLinkText: 'Más....',
     noEventsText: 'No hay eventos',
     aria: {
         'datatable.sort.ASC': 'ordenar columna ascendente',
         'datatable.sort.DESC': 'ordenar columna descendente',
         'datatable.sort.NONE': 'eliminar la clasificación en la columna',
         'colorpicker.OPEN': 'Abrir selector de color',
         'colorpicker.CLOSE': 'Cerrar el selector de color',
         'colorpicker.CLEAR': 'Limpiar el color seleccionado',
         'colorpicker.MARKER': 'Saturación: {s}. Brillo: {v}.',
         'colorpicker.HUESLIDER': 'Deslizador de tono',
         'colorpicker.ALPHASLIDER': 'Deslizador de opacidad',
         'colorpicker.INPUT': 'Campo de valor de color',
         'colorpicker.FORMAT': 'Formato de color',
         'colorpicker.SWATCH': 'Muestra de color',
         'colorpicker.INSTRUCTION': 'Selector de saturación y brillo. Utilice las teclas de flecha arriba, abajo, izquierda y derecha para seleccionar.',
         'spinner.INCREASE': 'Aumentar valor',
         'spinner.DECREASE': 'Disminuir valor',
         'messages.ERROR': 'Error',
         'messages.FATAL': 'Fatal',
         'messages.INFO': 'Información',
         'messages.WARN': 'Advertencia'
     },
     messages: { //optional for Client Side Validation
         'javax.faces.component.UIInput.REQUIRED': '{0}: Error de validación: se necesita un valor.',
         'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos.',
         'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' debe ser un número entre -2147483648 y 2147483647. Ejemplo: {1}',
         'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos.',
         'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' debe ser un número entre 4.9E-324 y 1.7976931348623157E308  Ejemplo: {1}',
         'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' debe ser un número decimal positivo o negativo.',
         'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' debe ser un número decimal positivo o negativo formado por cero o más dígitos, que pueden incluir a continuación una coma decimal y una fracción.  Ejemplo: {1}',
         'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos.',
         'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos. Ejemplo: {1}',
         'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' debe ser un número entre 0 y 255.',
         'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' debe ser un número entre 0 y 255.  Ejemplo: {1}',
         'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' debe ser un carácter válido.',
         'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' debe ser un carácter ASCII válido.',
         'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos.',
         'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' debe ser un número entre -32768 y 32767 Ejemplo: {1}',
         'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' debe ser \'true\' o \'false\'',
         'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' debe ser \'true\' o \'false\'.  Cualquier valor diferente a \'true\' se evaluará como \'false\'.',
         'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: Error de validación: el valor es mayor que el máximo permitido de \'{0}\'',
         'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: Error de validación: el valor es inferior que el mínimo permitido de \'{0}\'',
         'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: Error de validación: el atributo especificado no está entre los valores esperados {0} y {1}.',
         'javax.faces.validator.LongRangeValidator.TYPE': '{0}: Error de validación: el valor no tiene el tipo correcto.',
         'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: Error de validación: el valor es mayor que el máximo permitido de \'{0}\'',
         'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: Error de validación: el valor es inferior que el mínimo permitido de \'{0}\'',
         'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: Error de validación: el atributo especificado no está entre los valores esperados {0} y {1}',
         'javax.faces.validator.DoubleRangeValidator.TYPE': '{0}: Error de validación: el valor no tiene el tipo correcto.',
         'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' debe ser un número formado por uno o varios dígitos.',
         'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' debe ser un número entre 1.4E-45 y 3.4028235E38  Ejemplo: {1}',
         'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' no se ha podido reconocer como fecha.',
         'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' no se ha podido reconocer como fecha. Ejemplo: {1}',
         'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' no se ha podido reconocer como hora.',
         'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' no se ha podido reconocer como hora. Ejemplo: {1}',
         'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' no se ha podido reconocer como fecha y hora.',
         'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' no se ha podido reconocer como fecha y hora. Ejemplo: {1}',
         'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: debe especificarse el atributo \'pattern\' o \'type\' para convertir el valor \'{0}\'',
         'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' no se ha podido reconocer como un valor de divisa.',
         'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' no se ha podido reconocer como un valor de divisa. Ejemplo: {1}',
         'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' no se ha podido reconocer como porcentaje.',
         'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' no se ha podido reconocer como porcentaje. Ejemplo: {1}',
         'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' no se ha podido reconocer como fecha.',
         'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' no es un número. Ejemplo: {1}',
         'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' no es un patrón numérico.',
         'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' no es un patrón numérico. Ejemplo: {1}',
         'javax.faces.validator.LengthValidator.MINIMUM': '{1}: Error de validación: el largo es inferior que el mínimo permitido de \'{0}\'',
         'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: Error de validación: el largo es mayor que el máximo permitido de \'{0}\'',
         'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': 'Se debe establecer el patrón de Regex.',
         'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': 'El patrón Regex debe establecerse en un valor no vacío.',
         'javax.faces.validator.RegexValidator.NOT_MATCHED': 'El patrón Regex no coincide',
         'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': 'El patrón Regex de \'{0}\' no coincide',
         'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': 'Error en expresión regular.',
         'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': 'Error en expresión regular, \'{0}\'',
         //optional for bean validation integration in client side validation
         'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
         'javax.validation.constraints.AssertFalse.message': 'debe ser falso',
         'javax.validation.constraints.AssertTrue.message': 'debe ser verdadero',
         'javax.validation.constraints.DecimalMax.message': 'debe ser menor que o igual a {0}',
         'javax.validation.constraints.DecimalMin.message': 'debe ser mayor que o igual a {0}',
         'javax.validation.constraints.Digits.message': 'valor numérico fuera de los límites (se esperaba (<{0} digitos>.<{1} digitos>)',
         'javax.validation.constraints.Future.message': 'debe ser una fecha futura',
         'javax.validation.constraints.Max.message': 'debe ser menor que o igual a {0}',
         'javax.validation.constraints.Min.message': 'debe ser mayor que o igual a {0}',
         'javax.validation.constraints.NotNull.message': 'no debe ser nulo',
         'javax.validation.constraints.Null.message': 'debe ser nulo',
         'javax.validation.constraints.Past.message': 'debe ser una fecha pasada',
         'javax.validation.constraints.Pattern.message': 'debe coincidir con "{0}"',
         'javax.validation.constraints.Size.message': 'el tamaño debe estar entre {0} y {1}'
     }
 });