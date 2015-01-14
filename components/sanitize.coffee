# *************************************
#
#   Sanitize
#   -> Sanitizes a string to make it safe
#
# *************************************
#
# @param string { string }
#
# *************************************

@Spellbook.sanitize = ( string ) ->
  string.replace( /(<([^>]+)>)/ig, '' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.santize( '<h1>Hello!</h1>' )
#
