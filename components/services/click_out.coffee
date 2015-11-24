# *************************************
#
#   Click Out
#   -> Run action when document is clicked
#
# *************************************
#
# @param $element { jQuery object }
# @param run      { function }
#
# *************************************

@Spellbook.Services.clickOut = ( options ) ->
  settings = $.extend
    $element : $( '.js-clickout' )
    run      : null
  , options

  $( document ).on 'click', -> settings.run()

  settings.$element.on 'click', ( event ) ->
    event.stopPropagation()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.clickOut
#   run : ->
#     # ...
#
