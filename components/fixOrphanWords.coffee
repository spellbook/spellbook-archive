# *************************************
#
#   Fix Orphan Words
#   -> Adds non-breaking space to prevent orphan words
#      Credit: http://css-tricks.com/snippets/jquery/add-non-breaking-space-on-title-to-prevent-widows
#
# *************************************
#
# options.element - the element containing the text to fix
#
# *************************************

@Spellbook.fixOrphanWords = (options) ->
  settings = $.extend(
    element: $('.js-orphan')
  , options)

  wordArray = settings.element.text().split(" ")
  finalTitle = ""

  for i in [0..wordArray.length - 1]

    finalTitle += wordArray[i]

    if i == (wordArray.length - 2)
        finalTitle += "&nbsp;"
    else
        finalTitle += " "

  settings.element.html(finalTitle)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.fixOrphanWords()
#