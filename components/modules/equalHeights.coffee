# *************************************
#
#   Equal Heights
#   -> Create equal-height elements
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@Spellbook.Modules.EqualHeights = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}
  _heights  = []
  _timer    = null

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element : $( '.js-equalHeights' )
    , options

    _setHeight()
    _setEventHandlers()

  # -------------------------------------
  #   Set Height
  # -------------------------------------

  _setHeight = ->
    _settings.$element.css( 'height', 'auto' )

    _settings.$element.each -> _heights.push $(@).height()

    height = Math.max.apply( Math, _heights )

    _settings.$element.css( 'height', height )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    $( window ).on 'resize', ->
      clearTimeout( _timer )
      _timer = setTimeout( _setHeight, 250 )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.EqualHeights.init()
#
