# *************************************
#
#   Limiter
#   -> Limit a set of elements
#
# *************************************
#
# @param $element    { jQuery object }
# @param $toggle     { jQuery object }
# @param classHidden { string }
# @param limit       { integer }
#
# *************************************

@Spellbook.Services.limiter = ( options ) ->
  settings = $.extend
    $element    : $( '.js-limiter-element' )
    $toggle     : $( '.js-limiter-toggle' )
    classHidden : 'is-hidden'
    limit       : 5
  , options

  count = settings.$element.length

  if count > settings.limit
    settings.$element
      .not( ":lt(#{ settings.limit })" )
      .addClass( settings.classHidden )

    settings.$toggle.on 'click', ( event ) ->
      event.preventDefault()
      $(@).remove()
      settings.$element.removeClass( settings.classHidden )
  else
    settings.$toggle.remove()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.limiter()
#
