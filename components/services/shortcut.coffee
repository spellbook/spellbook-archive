# *************************************
#
#   Shortcut
#   -> Trigger clicking an element after keyup
#
# *************************************
#
#   Dependencies
#   - Spellbook.Globals.keyCodes
#
# *************************************
#
# @param $element { jQuery object }
# @param dataAttr { string }
# @param keyCodes { object }
#
# *************************************

@Spellbook.Services.shortcut = ( options ) ->
  settings = $.extend
    $element : $( '[data-shortcut]' )
    dataAttr : 'shortcut'
    keyCodes : Spellbook.Globals.keyCodes
  , options

  settings.$element.each ->
    key = settings.keyCodes[ $(@).data( settings.dataAttr ) ]

    $( document ).on 'keyup', ( event ) =>
      $element = $(@)
      tag      = event.target.tagName.toLowerCase()

      unless tag is 'input' or tag is 'textarea'
        if event.which is key
          $element.trigger( 'focus' ).trigger( 'click' )

          if $element.prop( 'tagName' ).toLowerCase() is 'a'
            window.location = $element.attr( 'href' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.shortcut()
#
