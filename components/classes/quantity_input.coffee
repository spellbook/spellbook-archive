# *************************************
#
#   Quantity Input
#   -> Increase input quantity and target
#
# *************************************
#
# @param $decrease      { jQuery object }
# @param $element       { jQuery object }
# @param $field         { jQuery object }
# @param $increase      { jQuery object }
# @param $target        { jQuery object }
# @param onDecrease     { function }
# @param onIncrease     { function }
# @param onTargetUpdate { function }
# @param valueBase      { integer }
# @param valueMax       { integer }
# @param valueMin       { integer }
# @param valuePrefix    { string }
#
# *************************************

class @Spellbook.Classes.QuantityInput extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults       :
    $decrease      : $( '.js-quantityInput-decrease' )
    $element       : $( '.js-quantityInput' )
    $field         : $( '.js-quantityInput-field' )
    $increase      : $( '.js-quantityInput-increase' )
    $target        : $( '.js-quantityInput-target' )
    onDecrease     : null
    onIncrease     : null
    onTargetUpdate : null
    valueBase      : 29
    valueMax       : 100
    valueMin       : 1
    valuePrefix    : '$'

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_value = null

    @_setValue()
    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->

    # ----- Input Keyup ----- #

    @_settings.$element.on 'keyup', ( event ) =>
      @_setValue()
      unless isNaN( @_value ) or @_value < @_settings.valueMin or @_value > @_settings.valueMax
        @_updateValue()

    # ----- Increase ----- #

    @_settings.$increase.on 'click', ( event ) =>
      event.preventDefault()

      @_updateValue( 'up' ) unless @_value >= @_settings.valueMax

      # Increase Event
      @_settings.onIncrease?( @_settings )

    # ----- Decrease ----- #

    @_settings.$decrease.on 'click', ( event ) =>
      event.preventDefault()

      @_updateValue( 'down' ) unless @_value <= @_settings.valueMin

      # Decrease Event
      @_settings.onDecrease?( @_settings )

  # -------------------------------------
  #   Set Value
  # -------------------------------------

  _setValue : ->
    @_value = parseInt( @_settings.$element.val() )

  # -------------------------------------
  #   Update Target
  # -------------------------------------

  _updateTarget : ->
    updatedValue = @_value * @_settings.valueBase

    @_settings.$target.text( "#{ @_settings.valuePrefix }#{ updatedValue }" )

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
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.QuantityInput()
#
