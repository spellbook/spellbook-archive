# *************************************
#
#   Is Blank
#   -> Check for a whitespace-only string
#
# *************************************
#
# @param string { string }
#
# *************************************

@Spellbook.Helpers.isBlank = ( string ) ->
  return if string.trim().length == 0 then true else false

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Helpers.isBlank( ' ' )
#
