# *************************************
#
#   Escape Out
#   -> Run a function when escape key is hit
#
# *************************************
#
# @param run { function }
#
# *************************************

@Spellbook.Services.escapeOut = ( options ) ->
  settings = $.extend
    run : null
  , options

  $( document ).on 'keyup', ( event ) ->
    switch event.which
      when 27 then settings.run()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.escapeOut
#   run : ->
#     # ...
#
