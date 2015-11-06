# *************************************
#
#   Show Password
#   -> Allow a user to hide/show password field
#
# *************************************
#
# @param $input        { jQuery object }
# @param $toggle       { jQuery object }
# @param showByDefault { boolean }
#
# *************************************

class @Spellbook.Classes.ShowPassword extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $input        : $( '.js-showPassword-input' )
      $toggle       : $( '.js-showPassword-toggle' )
      showByDefault : false

    @_setEventHandlers()
    @_showPassword() if @_settings.showByDefault

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$toggle.on 'change', ( event ) =>
      show = $( event.currentTarget ).prop( 'checked' )

      if show
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
