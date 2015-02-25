# *************************************
#
#   Select Text
#   -> Highlight text on click
#
# *************************************
#
# @param $element { jQuery object }
# @param onClick  { function }
#
# *************************************

@Spellbook.selectText = ( options ) ->
  settings = $.extend
    $element : $( '.js-selectText' )
    onClick  : null
  , options

  selectElement = ( $element ) ->
    node = $element[ 0 ]

    if ( document.body.createTextRange )
      range = document.body.createTextRange()

      range.moveToElementText( node )
      range.select()

    else if ( window.getSelection )
      selection = window.getSelection()
      range     = document.createRange()

      range.selectNodeContents( node )
      selection.removeAllRanges()
      selection.addRange( range )

  settings.$element.on 'click', ->
    selectElement( $element )
    $(@).trigger( 'focus' ).trigger( 'select' )
    settings.onClick( settings ) if settings.onClick?

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.selectText()
#
