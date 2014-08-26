# *************************************
#
#   Clickout
#   -> Run action when document is clicked
#
# *************************************
#
# options.run - the function to run
# options.elemetn - the element to kill propagation on
#
# *************************************

@Spellbook.clickout = (options) ->
  $(document).on 'click', -> options.run()

  options.element.on 'click', (event) ->
    event.stopPropagation()

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.clickout({
#   element: $('.js-clickout')
#   run: ->
#     # ...
# })
#

