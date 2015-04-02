# *************************************
#
#   Loader
#   -> Loading state
#
# *************************************
#
# @param $element     { jQuery object }
# @param $toggle      { jQuery object }
# @param $spinner     { jQuery object }
# @param $overlay     { jQuery object }
# @param spinnerClass { string }
# @param overlayClass { string }
# @param loadingClass { string }
#
# *************************************

@Spellbook.Services.loader = ( options ) ->
  settings = $.extend
    $element     : $( '.js-loader-element' )
    $toggle      : $( '.js-loader-toggle' )
    $spinner     : $( '<span></span>' )
    $overlay     : $( '<div></div>' )
    spinnerClass : 'loader'
    overlayClass : 'loader-overlay'
    loadingClass : 'is-loading'
  , options

  settings.$toggle.on 'click', ( event ) ->
    settings.$element.toggleClass( settings.loadingClass )
    settings.$element.append( settings.$spinner )
    settings.$spinner.addClass( settings.spinnerClass )
    settings.$element.append( settings.$overlay )
    settings.$overlay.addClass( settings.overlayClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.loader()
#
