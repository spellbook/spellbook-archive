# *************************************
#
#   Limiter
#   -> Limit a set of elements
#
# *************************************

@Spellbook.limiter = (options) ->
  settings = $.extend(
    element: $('.js-limiter-element')
    toggle: $('.js-limiter-toggle')
    limit: 5
    hiddenClass: 'is-hidden'
  , options)

  count = settings.element.length

  if count > settings.limit
    settings.element
      .not(":lt(#{ settings.limit })")
      .addClass(settings.hiddenClass)

    settings.toggle.on 'click', (event) ->
      event.preventDefault()
      $(@).remove()
      settings.element.removeClass(settings.hiddenClass)
  else
    settings.toggle.remove()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.limiter()
#

