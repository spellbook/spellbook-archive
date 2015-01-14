# *************************************
#
#   Slugify
#   -> Converts a string to a URL-friendly slug
#
# *************************************

@Spellbook.slugify = ( string ) ->
  string
    .toLowerCase()
    .replace( /[^\w ]+/g, '' )
    .replace( /\s+/g, '-' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# string = 'This is my string!'
# Spellbook.slugify( string )
#
