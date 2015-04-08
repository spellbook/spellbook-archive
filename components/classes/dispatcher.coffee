# *************************************
#
#   Dispatcher
#   -> Run JS events based on current page
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

  dispatch: ( event = null ) ->
    page = @_getCurrentPage()

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

new Spellbook.Classes.Dispatcher
  events: [
    {
      page: 'home'
      run: -> console.log( 'home' )
    },
    {
      page: 'about'
      run: -> console.log( 'about' )
    },
    {
      page: 'contact'
      run: -> console.log( 'contact' )
    }
  ]
