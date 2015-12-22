# *************************************
#
#   Base
#   -> Class boilerplate
#
# *************************************

class @Spellbook.Classes.Base

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( @options ) ->
    @_settings = $.extend( {}, @constructor._defaults, @options )

# -------------------------------------
#   Usage
# -------------------------------------
#
# class @Spellbook.Classes.ClassName extends Spellbook.Classes.Base
#   # ...
#
