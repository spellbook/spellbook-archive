# *************************************
#
#   Scroll Trigger
#   -> Apply class on viewport entry
#
# *************************************
#
# @param $element       { jQuery object }
# @param scrollPadding  { integer }
# @param activeClass    { string }
#
# *************************************

@Spellbook.Services.scrollTrigger = ( options ) ->
  settings = $.extend
    $element      : $( '.js-scrollTrigger' )
    scrollPadding : 400
    activeClass   : 'is-active'
    onTrigger     : null
  , options

  scrolled = $( window ).scrollTop()

  if settings.$element.offset().top >= 0
    active = scrolled - settings.$element.offset().top - settings.scrollPadding

  if not settings.$element.hasClass( settings.activeClass ) and active
    settings.$element.addClass( settings.activeClass )

    settings.onTrigger?( settings )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.scrollTrigger()
#
