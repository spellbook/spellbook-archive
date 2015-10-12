# *************************************
#
#   Focus First Input
#   -> Enter initial form item
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@Spellbook.Services.focusFirstInput = ( options ) ->
  settings = $.extend
    $element : $( '.js-focusFirstInput' )
  , options

  settings.$element
    .find( 'input, textarea, [contenteditable]' )
    .filter( ':visible' )
    .first()
    .trigger( 'focus' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.focusFirstInput()
#
