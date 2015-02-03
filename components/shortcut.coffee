# *************************************
#
#   Shortcut
#   -> Trigger clicking an element after keyup
#
# *************************************
#
#   Dependencies
#   - Spellbook.keyCodes
#
# *************************************
#
# @param $element      { jQuery object }
# @param dataAttribute { string }
# @param keyCodes      { object }
#
# *************************************

@Spellbook.shortcut = ( options ) ->
  settings = $.extend
    $element      : $( '[data-shortcut]' )
    dataAttribute : 'shortcut'
    keyCodes      : Spellbook.keyCodes
  , options

  settings.$element.each ->
    key = settings.keyCodes[ $(@).data( settings.dataAttribute ) ]

    $( document ).on 'keyup', ( event ) =>
      $element = $(@)
      tag      = event.target.tagName.toLowerCase()

      unless tag == 'input' or tag == 'textarea'
        if event.which == key
          $element.trigger( 'focus' ).trigger( 'click' )

          if $element.prop( 'tagName' ).toLowerCase() == 'a'
            window.location = $element.attr( 'href' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.shortcut()
#
