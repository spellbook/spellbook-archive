# *************************************
#
#   Loader
#   -> Loading state
#
# *************************************

@Spellbook.loader = (options) ->
  settings = $.extend
    toggle       : $('.js-loader-toggle')
    element      : $('.js-loader-element')
    spinner      : $('<span></span>')
    spinnerClass : 'loader'
    overlay      : $('<div></div>')
    overlayClass : 'loader-overlay'
    loadingClass : 'is-loading'
  , options

  settings.toggle.on 'click', (event) ->
    settings.element.toggleClass(settings.loadingClass)
    settings.element.append(settings.spinner)
    settings.spinner.addClass(settings.spinnerClass)
    settings.element.append(settings.overlay)
    settings.overlay.addClass(settings.overlayClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.loader()
#
