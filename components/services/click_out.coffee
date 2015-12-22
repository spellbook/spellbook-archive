# *************************************
#
#   Click Out
#   -> callback action when document is clicked
#
# *************************************
#
# @param $element { jQuery object }
# @param callback { function }
#
# *************************************

@Spellbook.Services.clickOut = ( options ) ->
  settings = $.extend
    $element : $( '.js-clickout' )
    callback : null
  , options

  $( document ).on 'click', -> settings.callback()

  settings.$element.on 'click', ( event ) ->
    event.stopPropagation()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.clickOut
#   callback : ->
#     # ...
#
