this.Spellbook.Modules.Share = (function() {
  var _setEventHandlers, _settings, _triggerPopup, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-share'),
      popup: {
        height: 400,
        width: 575,
        left: 0,
        top: 0
      }
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('click', function(event) {
      var $element, content, service, url;
      event.preventDefault();
      $element = $(this);
      url = $element.attr('href');
      service = $element.data('share-service');
      content = $element.data('share-text');
      return _triggerPopup(service, url, content);
    });
  };
  _triggerPopup = function(service, url, content) {
    var popupOptions;
    popupOptions = "width=" + _settings.popup.width + ", height=" + _settings.popup.height + ", top=" + _settings.popup.top + ", left=" + _settings.popup.left;
    switch (service) {
      case 'twitter':
        url = "https://twitter.com/share?text=" + content + "&url=" + url;
        break;
      case 'facebook':
        url = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        service = 'facebook-share-dialog';
        break;
      case 'google':
        url = "https://plus.google.com/share?url=" + url;
    }
    return window.open(url, service, popupOptions);
  };
  return {
    init: init
  };
})();
