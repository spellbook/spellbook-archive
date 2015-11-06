# *************************************
#
#   Base
#   -> Class boilerplate
#
# *************************************

class @Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( @options ) -> @init?()

  # -------------------------------------
  #   Set Defaults
  # -------------------------------------

  _setDefaults : ( defaults ) ->
    @_settings = $.extend( defaults, @options )

# -------------------------------------
#   Usage
# -------------------------------------
#
# class @Spellbook.Classes.ClassName extends Spellbook.Classes.Base
#   # ...
#
