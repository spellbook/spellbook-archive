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

@Spellbook.Modules.selectText = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element : $( '.js-selectText' )
      onClick  : null
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Select Element
  # -------------------------------------

  _selectElement = ( $element ) ->
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

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.$element.on 'click', ->
      _selectElement( _settings.$element )
      $(@).trigger( 'focus' ).trigger( 'select' )
      _settings.onClick( _settings ) if _settings.onClick?

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.selectText.init()
#
