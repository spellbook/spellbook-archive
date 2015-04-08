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

class @Spellbook.Classes.Dispatcher

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor: ( @options ) -> @init()

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ->
    @_settings = $.extend
      $element : $( '.js-dispatcher' )
      dataAttr : 'dispatcher-page'
      events   : {}
    , @options

    @dispatch()

  # -------------------------------------
  #   Dispatch
  # -------------------------------------
  #
  # @param event { object }
  #
  # -------------------------------------

  dispatch: ( event = null ) ->
    page = @_getCurrentPage()

    return false unless page

    unless event?
      for event in @_settings.events
        switch event.page
          when page then event.run()

    else
      switch event.page
        when page then event.run()

  # -------------------------------------
  #   Get Current Page
  # -------------------------------------

  _getCurrentPage: ->
    @_settings.$element.data( @_settings.dataAttr )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.Dispatcher
#   events: [
#     { ... }
#   ]
#
