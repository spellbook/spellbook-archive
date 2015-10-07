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

class @Spellbook.Classes.EqualHeights

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}
  _heights  : []
  _timer    : null

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) -> @init( options )

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ( options ) ->
    @_settings = $.extend
      $element : $( '.js-equalHeights' )
    , options

    @_setHeight()
    @_setEventHandlers()

  # -------------------------------------
  #   Set Height
  # -------------------------------------

  _setHeight: ->
    @_settings.$element.css( 'height', 'auto' )

    @_settings.$element.each ( index, elementNode ) =>
      @_heights.push $( elementNode ).height()

    height = Math.max.apply( Math, @_heights )

    @_settings.$element.css( 'height', height )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers: ->
    $( window ).on 'resize', =>
      clearTimeout( @_timer )
      @_timer = setTimeout( @_setHeight, 250 )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.EqualHeights()
#
