# *************************************
#
#   Sanitize
#   -> Sanitizes a string to make it safe
#
# *************************************

@Spellbook.sanitize = (string) ->
  string.replace( /(<([^>]+)>)/ig, '' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.santize('<h1>Hello!</h1>')
#
