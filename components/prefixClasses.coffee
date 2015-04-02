# *************************************
#
#   Prefix Classes
#   -> Prepend a string to class names
#
# *************************************
#
# @param $element { jQuery object }
# @param query    { string }
# @param prefix   { string }
#
# *************************************

@Spellbook.prefixClasses = ( options ) ->
  settings = $.extend
    $element : $( '.js-prefixClasses' )
    query    : '[ class ]'
    prefix   : 'prefix'
  , options

  settings.$element.find( settings.query ).each ->
    node            = @
    classArray      = node.className.split( ' ' )
    prefixedClasses = ''

    for className in classArray
      prefixedClasses = "#{ prefixedClasses } #{ settings.prefix }-#{ className }"

    node.className = prefixedClasses

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.prefixClasses()
#
