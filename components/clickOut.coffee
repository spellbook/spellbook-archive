# *************************************
#
#   Click Out
#   -> Run action when document is clicked
#
# *************************************
#
# @param run     { function }
# @param element { jQuery object }
#
# *************************************

@Spellbook.clickOut = ( options ) ->
  settings = $.extend
    element: $( '.js-clickout' )
  , options

  $( document ).on 'click', -> settings.run()

  settings.element.on 'click', ( event ) ->
    event.stopPropagation()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.clickOut
#   run: ->
#     # ...
#
