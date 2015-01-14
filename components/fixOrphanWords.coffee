# *************************************
#
#   Fix Orphan Words
#   -> Adds non-breaking space to prevent orphan words
#      Credit: http://css-tricks.com/snippets/jquery/add-non-breaking-space-on-title-to-prevent-widows
#
# *************************************
#
# @param element { jQuery object }
#
# *************************************

@Spellbook.fixOrphanWords = ( options ) ->
  settings = $.extend
    element: $( '.js-orphan' )
  , options

  settings.element.each ->
    element    = $(@)
    wordArray  = element.text().split( ' ' )
    finalTitle = ''

    for i in [ 0..wordArray.length - 1 ]

      finalTitle += wordArray[ i ]

      if i is ( wordArray.length - 2 )
        finalTitle += '&nbsp;'
      else if i is ( wordArray.length - 1 )
        finalTitle += ''
      else
        finalTitle += ' '

    element.html( finalTitle )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.fixOrphanWords()
#
