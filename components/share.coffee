# *************************************
#
#   Share
#   -> Share page on social sites
#
# *************************************
#
# @param service      { jQuery object }
# @param popup.height { integer }
# @param popup.width  { integer }
# @param popup.left   { integer }
# @param popup.top    { integer }
#
# *************************************

@Spellbook.Share = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      service  : $( '.js-share-service' )
      popup    :
        height : 400
        width  : 575
        left   : 0
        top    : 0
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.service.on 'click', ( event ) ->
      event.preventDefault()

      element = $(@)
      url     = element.attr( 'href' )
      service = element.data( 'share-service' )
      content = element.data( 'share-text' )

      _triggerPopup( service, url, content )

  # -------------------------------------
  #   Trigger Popup
  # -------------------------------------
  #
  # @param service { string }
  # @param url     { string }
  # @param content { string }
  #
  # -------------------------------------

  _triggerPopup = ( service, url, content ) ->
    popupOptions =
      "width=#{ _settings.popup.width },
       height=#{ _settings.popup.height },
       top=#{ _settings.popup.top },
       left=#{ _settings.popup.left }"

    switch service
      when 'twitter'
        url = "https://twitter.com/share?text=#{ content }&url=#{ url }"
      when 'facebook'
        url     = "https://www.facebook.com/sharer/sharer.php?u=#{ url }"
        service = 'facebook-share-dialog'
      when 'google'
        url = "https://plus.google.com/share?url=#{ url}"

    window.open( url, service, popupOptions )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Share.init()
#
