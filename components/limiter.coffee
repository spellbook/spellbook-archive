# *************************************
#
#   Limiter
#   -> Limit a set of elements
#
# *************************************
#
# @param $element    { jQuery object }
# @param $toggle     { jQuery object }
# @param limit       { integer }
# @param hiddenClass { string }
#
# *************************************

@Spellbook.limiter = ( options ) ->
  settings = $.extend
    $element    : $( '.js-limiter-element' )
    $toggle     : $( '.js-limiter-toggle' )
    hiddenClass : 'is-hidden'
    limit       : 5
  , options

  count = settings.$element.length

  if count > settings.limit
    settings.$element
      .not( ":lt(#{ settings.limit })" )
      .addClass( settings.hiddenClass )

    settings.$toggle.on 'click', ( event ) ->
      event.preventDefault()
      $(@).remove()
      settings.$element.removeClass( settings.hiddenClass )
  else
    settings.$toggle.remove()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.limiter()
#
