# *************************************
#
#   Service Name
#   -> Description
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@Spellbook.Services.serviceName = ( options ) ->
  settings = $.extend
    $element: $( '.js-element' )
  , options

  # ...

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.serviceName
#   # ...
#
