this.Spellbook.Classes.Share = (function() {
  Share.prototype._settings = {};

  function Share(options) {
    this.init(options);
  }

  Share.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-share'),
      popup: {
        height: 400,
        width: 575,
        left: 0,
        top: 0
      }
    }, options);
    return this._setEventHandlers();
  };

  Share.prototype._setEventHandlers = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var $element, content, service, url;
        event.preventDefault();
        $element = $(event.currentTarget);
        url = $element.attr('href');
        service = $element.data('share-service');
        content = $element.data('share-text');
        return _this._triggerPopup(service, url, content);
      };
    })(this));
  };

  Share.prototype._triggerPopup = function(service, url, content) {
    var popupOptions;
    popupOptions = "width=" + this._settings.popup.width + ", height=" + this._settings.popup.height + ", top=" + this._settings.popup.top + ", left=" + this._settings.popup.left;
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

  return Share;

})();
