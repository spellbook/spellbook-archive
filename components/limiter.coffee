# *************************************
#
#   Limiter
#   -> Limit a set of elements
#
# *************************************

@Spellbook.limiter = (options) ->
  settings = $.extend(
    elements: $('.js-limiter-element')
    toggle: $('.js-limiter-toggle')
    limit: 5
    hiddenClass: 'is-hidden'
  , options)

  count = settings.elements.length

  if count > settings.limit
    settings.elements
      .not(":lt(#{ settings.limit })")
      .addClass(settings.hiddenClass)

    settings.toggle.on 'click', (event) ->
      event.preventDefault()
      $(@).remove()
      settings.elements.removeClass(settings.hiddenClass)
  else
    settings.toggle.remove()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.limiter()
#

