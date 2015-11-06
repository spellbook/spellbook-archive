# *************************************
#
#   Singleton
#   -> Only one object can exist!
#
# *************************************

class @Spellbook.Classes.Singleton

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _instance : null

  # -------------------------------------
  #   Get Instance
  # -------------------------------------

  @getInstance : ->
    @_instance ?= new @( arguments... )

# -------------------------------------
#   Usage
# -------------------------------------
#
# class @Spellbook.Classes.ClassName extends Spellbook.Classes.Singleton
#   # ...
#
