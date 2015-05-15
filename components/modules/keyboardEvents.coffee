# *************************************
#
#   Keyboard Events
#   -> Keyboard event emitter
#
# *************************************
#
# @param events { array (objects) }
#
# *************************************

@Spellbook.Modules.KeyboardEvents = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      events : []
    , options

    emit()

  # -------------------------------------
  #   Match
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  _match = ( event ) ->
    $( document ).on 'keyup', ( e ) ->
      switch _getKeyCode( e )
        when event.key then event.run()

  # -------------------------------------
  #   Get Key Code
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  _getKeyCode = ( event ) ->
    event    = event  || window.event
    charCode = event.keyCode || event.which

    charCode

  # -------------------------------------
  #   Emit
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  emit = ( event = null ) ->
    unless event?
      for event in _settings.events
        _match( event )
    else
      _match( event )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init
  emit : emit

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.KeyboardEvents.init
#   events: [
#     { ... }
#   ]
#
# Spellbook.Modules.KeyboardEvents.emit( { ... } )
#
