# *************************************
#
#   Escape Out
#   -> callback a function when escape key is hit
#
# *************************************
#
# @param callback { function }
#
# *************************************

@Spellbook.Services.escapeOut = ( options ) ->
  settings = $.extend
    callback : null
  , options

  $( document ).on 'keyup', ( event ) ->
    switch event.which
      when 27 then settings.callback()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.escapeOut
#   callback : ->
#     # ...
#
