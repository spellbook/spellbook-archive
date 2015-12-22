# *************************************
#
#   Form Preview
#   -> Rendered form elements preview
#
# *************************************
#
# @param $element { jQuery object }
# @param idName   { string }
# @param dataAttr { string }
# @param onKeyup  { function }
#
# *************************************

@Spellbook.Services.formPreview = ( options ) ->
  settings = $.extend
    $element    : $( '.js-formPreview-input' )
    idName      : 'formPreview'
    dataAttr    : 'preview'
    onKeyup     : null
  , options

  settings.$element.on 'keyup', ( event ) ->
    $element = $(@)
    value    = $element.val()
    index    = $element.data( settings.dataAttr )

    $( "##{ settings.idName }-#{ index }" ).text( value )

    settings.onKeyup( settings ) if settings.onKeyup?

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.formPreview()
#
