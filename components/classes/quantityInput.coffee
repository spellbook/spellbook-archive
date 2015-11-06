# *************************************
#
#   Quantity Input
#   -> Increase input quantity and target
#
# *************************************
#
# @param $element          { jQuery object }
# @param $field            { jQuery object }
# @param $increase         { jQuery object }
# @param $decrease         { jQuery object }
# @param $target           { jQuery object }
# @param targetBaseValue   { integer }
# @param targetValuePrefix { string }
# @param minValue          { integer }
# @param maxValue          { integer }
# @param onIncrease        { function }
# @param onDecrease        { function }
# @param onTargetUpdate    { function }
#
# *************************************

class @Spellbook.Classes.QuantityInput extends Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _value : null

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element          : $( '.js-quantityInput' )
      $field            : $( '.js-quantityInput-field' )
      $increase         : $( '.js-quantityInput-increase' )
      $decrease         : $( '.js-quantityInput-decrease' )
      $target           : $( '.js-quantityInput-target' )
      targetBaseValue   : 29
      targetValuePrefix : '$'
      minValue          : 1
      maxValue          : 100
      onIncrease        : null
      onDecrease        : null
      onTargetUpdate    : null

    @_setValue()
    @_setEventHandlers()

  # -------------------------------------
  #   Set Value
  # -------------------------------------

  _setValue : ->
    @_value = parseInt( @_settings.$element.val() )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->

    # ----- Input Keyup ----- #

    @_settings.$element.on 'keyup', ( event ) =>
      @_setValue()
      unless isNaN( @_value ) or @_value < @_settings.minValue or @_value > @_settings.maxValue
        @_updateValue()

    # ----- Increase ----- #

    @_settings.$increase.on 'click', ( event ) =>
      event.preventDefault()

      @_updateValue( 'up' ) unless @_value >= @_settings.maxValue

      # Increase Event
      @_settings.onIncrease?( @_settings )

    # ----- Decrease ----- #

    @_settings.$decrease.on 'click', ( event ) =>
      event.preventDefault()

      @_updateValue( 'down' ) unless @_value <= @_settings.minValue

      # Decrease Event
      @_settings.onDecrease?( @_settings )

  # -------------------------------------
  #   Update Value
  # -------------------------------------
  #
  # @param direction { string }
  #
  # -------------------------------------

  _updateValue : ( direction = '' ) ->
    switch direction
      when 'up'   then @_settings.$element.val( ++ @_value )
      when 'down' then @_settings.$element.val( -- @_value )
      else @_settings.$element.val( @_value )

    @_updateTarget()

      # Target Update Event
    @_settings.onTargetUpdate?( @_settings )

  # -------------------------------------
  #   Update Target
  # -------------------------------------

  _updateTarget : ->
    updatedValue = @_value * @_settings.targetBaseValue

    @_settings.$target.text( "#{ @_settings.targetValuePrefix }#{ updatedValue }" )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.QuantityInput()
#
