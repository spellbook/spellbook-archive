# *************************************
#
#   Show Password
#   -> Allow a user to hide/show password field
#
# *************************************
#
# @param $input           { jQuery object }
# @param $toggle          { jQuery object }
# @param isShownByDefault { boolean }
#
# *************************************

class @Spellbook.Classes.ShowPassword extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults         :
    $input           : $( '.js-showPassword-input' )
    $toggle          : $( '.js-showPassword-toggle' )
    isShownByDefault : false

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_setEventHandlers()
    @_showPassword() if @_settings.isShownByDefault

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$toggle.on 'change', ( event ) =>
      isShown = $( event.currentTarget ).prop( 'checked' )

      if isShown
        @_showPassword()
      else
        @_settings.$input.attr( 'type', 'password' )

  # -------------------------------------
  #   Show Password
  # -------------------------------------

  _showPassword : ->
    @_settings.$input.attr( 'type', 'text' )
    @_settings.$toggle.prop( 'checked', true )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.ShowPassword()
#
