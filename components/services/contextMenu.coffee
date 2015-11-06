# *************************************
#
#   Context Menu
#   -> Right-click menu
#
# *************************************
#
# @param $element    { jQuery object }
# @param activeClass { string }
#
# *************************************

@Spellbook.Services.contextMenu = ( options ) ->
  settings = $.extend
    $element    : $( '.js-contextMenu' )
    activeClass : 'is-active'
  , options

  # -------------------------------------
  #   Event: Document Context Menu
  # -------------------------------------

  $( document ).on 'contextmenu', ( event ) ->
    event.preventDefault()

    settings.$element
      .css( { top : event.pageY + 'px', left : event.pageX + 'px' } )
      .addClass( settings.activeClass )

  # -------------------------------------
  #   Event: Document Click
  # -------------------------------------

  $( document ).on 'click', ( event ) ->
    settings.$element.removeClass( settings.activeClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.contextMenu
#   # ...
#
