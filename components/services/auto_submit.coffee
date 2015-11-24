# *************************************
#
#   Auto Submit
#   -> Submit form on input update
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@Spellbook.Services.autoSubmit = ( options ) ->
  settings = $.extend
    $element : $( '.js-autoSubmit' )
  , options

  settings.$element.on 'change', ->
    $(@).closest( 'form' ).trigger( 'submit' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.autoSubmit()
#
