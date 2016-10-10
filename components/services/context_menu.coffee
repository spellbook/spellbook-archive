# *************************************
#
#   Context Menu
#   -> Right-click menu
#
# *************************************
#
# @param $element    { jQuery object }
# @param classActive { string }
#
# *************************************

@Spellbook.Services.contextMenu = ( options ) ->
  settings = $.extend
    $element    : $( '.js-contextMenu' )
    classActive : 'is-active'
  , options

  # -------------------------------------
  #   Event: Document Context Menu
  # -------------------------------------

  $( document ).on 'contextmenu', ( event ) ->
    event.preventDefault()

    settings.$element
      .css( { top : event.pageY + 'px', left : event.pageX + 'px' } )
      .addClass( settings.classActive )

  # -------------------------------------
  #   Event: Document Click
  # -------------------------------------

  $( document ).on 'click', ( event ) ->
    settings.$element.removeClass( settings.classActive )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.contextMenu
#   # ...
#
