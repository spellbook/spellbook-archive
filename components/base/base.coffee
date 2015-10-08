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

  constructor : ( options ) -> @init( options )

# -------------------------------------
#   Usage
# -------------------------------------
#
# class @Spellbook.Classes.ClassName extends Spellbook.Classes.Base
#   # ...
#
