# *************************************
#
#   Sanitize
#   -> Sanitize a string to make it safe
#
# *************************************
#
# @param string { string }
#
# *************************************

@Spellbook.Helpers.sanitize = ( string ) ->
  string.replace( /(<([^>]+)>)/ig, '' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Helpers.santize( '<h1>Hello!</h1>' )
#
