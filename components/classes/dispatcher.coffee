# *************************************
#
#   Dispatcher
#   -> Run JS events based on current page
#      Credit: https://github.com/gitlabhq/gitlabhq/blob/master/app/assets/javascripts/dispatcher.js.coffee
#
# *************************************
#
# @param $element  { jQuery object }
# @param dataAttr  { string }
# @param events    { array (objects) }
#
# *************************************

class @Spellbook.Classes.Dispatcher extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element : $( '.js-dispatcher' )
      dataAttr : 'dispatcher-page'
      events   : []

    @dispatch()

  # -------------------------------------
  #   Dispatch
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  dispatch : ( event = null ) ->
    page = @_getCurrentPage()

    return false unless page

    unless event?
      for event in @_settings.events
        switch event.page
          when page  then event.run()
          when 'all' then event.run()

        if event.match
          event.run() if page.match( event.match )

    else
      switch event.page
        when page  then event.run()
        when 'all' then event.run()

  # -------------------------------------
  #   Get Current Page
  # -------------------------------------

  _getCurrentPage : ->
    @_settings.$element.data( @_settings.dataAttr )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.Dispatcher
#   events : [
#     { ... }
#   ]
#
