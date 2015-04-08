# *************************************
#
#   Randomize
#   -> Select a random value
#
# *************************************
#
# @param collection { array }
#
# *************************************

@Spellbook.Helpers.randomizer = ( collection ) ->
  randomNumber = Math.floor( Math.random() * collection.length )
  return collection[ randomNumber ]

# -------------------------------------
#   Usage
# -------------------------------------
#
# collection = [ 'one', 'two', 'three' ]
# Spellbook.Helpers.randomizer( collection )
#
