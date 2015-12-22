# *************************************
#
#   Loader
#   -> Loading state
#
# *************************************
#
# @param $element     { jQuery object }
# @param $overlay     { jQuery object }
# @param $spinner     { jQuery object }
# @param $toggle      { jQuery object }
# @param classLoading { string }
# @param classOverlay { string }
# @param classSpinner { string }
#
# *************************************

@Spellbook.Services.loader = ( options ) ->
  settings = $.extend
    $element     : $( '.js-loader-element' )
    $overlay     : $( '<div></div>' )
    $spinner     : $( '<span></span>' )
    $toggle      : $( '.js-loader-toggle' )
    classLoading : 'is-loading'
    classOverlay : 'loader-overlay'
    classSpinner : 'loader'
  , options

  settings.$toggle.on 'click', ( event ) ->
    settings.$element.toggleClass( settings.classLoading )
    settings.$element.append( settings.$spinner )
    settings.$spinner.addClass( settings.classSpinner )
    settings.$element.append( settings.$overlay )
    settings.$overlay.addClass( settings.classOverlay )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.loader()
#
