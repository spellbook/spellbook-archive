# *************************************
#
#   Randomize
#   -> Randomly select a value
#
# *************************************
#
# @param collection { array }
#
# *************************************

@Spellbook.randomizer = ( collection ) ->
  randomNumber = Math.floor( Math.random() * collection.length )
  return collection[ randomNumber ]

# -------------------------------------
#   Usage
# -------------------------------------
#
# collection = [ 'one', 'two', 'three' ]
# Spellbook.randomizer( collection )
#
