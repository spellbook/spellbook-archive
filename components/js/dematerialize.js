this.Spellbook.Dematerialize = (function() {
  Dematerialize._settings = {};

  Dematerialize._item = '';

  function Dematerialize(options) {
    this.options = options;
    this._settings = $.extend({
      $element: $('.js-dematerialize'),
      $trigger: $('.js-dematerialize-trigger'),
      itemTitle: 'hidden_element',
      hiddenClass: 'is-hidden'
    }, this.options);
  }

  Dematerialize.prototype.init = function() {
    this._setEventHandlers();
    return this._setInitialState();
  };

  Dematerialize.prototype._setEventHandlers = function() {
    if (this._settings.$trigger instanceof jQuery) {
      return this._settings.$trigger.on('click', (function(_this) {
        return function(event) {
          event.preventDefault();
          return _this._toggleState();
        };
      })(this));
    } else {
      return this._toggleStateViaKey();
    }
  };

  Dematerialize.prototype._setInitialState = function() {
    this._item = localStorage.getItem(this._settings.itemTitle);
    if (this._item !== 'true') {
      return this._settings.$element.removeClass(this._settings.hiddenClass);
    }
  };

  Dematerialize.prototype._toggleState = function() {
    if (!this._settings.$element.hasClass(this._settings.hiddenClass)) {
      this._settings.$element.addClass(this._settings.hiddenClass);
      return this._item = localStorage.setItem(this._settings.itemTitle, 'true');
    } else {
      this._settings.$element.removeClass(this._settings.hiddenClass);
      return this._item = localStorage.removeItem(this._settings.itemTitle);
    }
  };

  Dematerialize.prototype._toggleStateViaKey = function() {
    return $(document).on('keyup', (function(_this) {
      return function(event) {
        var tag;
        tag = event.target.tagName.toLowerCase();
        switch (event.which) {
          case _this._settings.$trigger:
            if (!(tag === 'input' || tag === 'textarea')) {
              return _this._toggleState();
            }
        }
      };
    })(this));
  };

  return Dematerialize;

})();
