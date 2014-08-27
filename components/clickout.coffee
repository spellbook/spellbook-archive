# *************************************
#
#   Clickout
#   -> Run action when document is clicked
#
# *************************************
#
# options.run - the function to run
# options.element - the element to kill propagation on
#
# *************************************

@Spellbook.clickout = (options) ->
  settings = $.extend(
    element: $('.js-clickout')
  , options)

  $(document).on 'click', -> settings.run()

  settings.element.on 'click', (event) ->
    event.stopPropagation()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.clickout
#   run: ->
#     # ...
#

