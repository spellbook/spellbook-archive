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

class @Spellbook.Classes.KeyboardEvents extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ->
    @_setDefaults
      events : []

    @emit()

  # -------------------------------------
  #   Match
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  _match : ( event ) ->
    $( document ).on 'keyup', ( e ) =>
      switch @_getKeyCode( e )
        when event.key then event.run()

  # -------------------------------------
  #   Get Key Code
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  _getKeyCode : ( event ) ->
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

  emit : ( event = null ) ->
    unless event?
      for event in @_settings.events
        @_match( event )
    else
      @_match( event )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.KeyboardEvents
#   events: [
#     { ... }
#   ]
#
