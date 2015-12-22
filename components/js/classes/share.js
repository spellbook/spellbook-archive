var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Share = (function(superClass) {
  extend(Share, superClass);

  Share._defaults = {
    $element: $('.js-share'),
    popup: {
      height: 400,
      left: 0,
      top: 0,
      width: 575
    }
  };

  function Share(options) {
    Share.__super__.constructor.call(this, options);
    this._setEventHandlers();
  }

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

})(Spellbook.Classes.Base);
