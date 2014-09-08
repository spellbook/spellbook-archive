# *************************************
#
#   Equal Heights
#   -> Create equal-height elements
#
# *************************************

@Spellbook.equalHeights = (options) ->
  settings = $.extend(
    element: $('.js-equalHeight')
  , options)

  heights = []
  settings.element.each -> heights.push $(@).height()

  height = Math.max.apply( Math, heights )

  settings.element.css( 'height', height )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.equalHeights()
#
