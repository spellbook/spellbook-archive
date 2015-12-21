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

class @Spellbook.Classes.EqualHeights extends Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _heights  : []
  _timer    : null

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element : $( '.js-equalHeights' )

    @_setHeight()
    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    $( window ).on 'resize', =>
      clearTimeout( @_timer )
      @_timer = setTimeout( @_setHeight, 250 )

  # -------------------------------------
  #   Set Height
  # -------------------------------------

  _setHeight : ->
    @_settings.$element.css( 'height', 'auto' )

    @_settings.$element.each ( index, elementNode ) =>
      @_heights.push $( elementNode ).height()

    height = Math.max.apply( Math, @_heights )

    @_settings.$element.css( 'height', height )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.EqualHeights()
#
