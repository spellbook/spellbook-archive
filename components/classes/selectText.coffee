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

class @Spellbook.Classes.SelectText extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element : $( '.js-selectText' )
      onClick  : null

    @_setEventHandlers()

  # -------------------------------------
  #   Select Element
  # -------------------------------------

  _selectElement : ( $element ) ->
    elementNode = $element[ 0 ]

    if ( document.body.createTextRange )
      range = document.body.createTextRange()

      range.moveToElementText( elementNode )
      range.select()

    else if ( window.getSelection )
      selection = window.getSelection()
      range     = document.createRange()

      range.selectNodeContents( elementNode )
      selection.removeAllRanges()
      selection.addRange( range )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$element.on 'click', ( event ) =>
      @_selectElement( @_settings.$element )

      $( event ).trigger( 'focus' ).trigger( 'select' )

      @_settings.onClick?( @_settings )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.selectText()
#
