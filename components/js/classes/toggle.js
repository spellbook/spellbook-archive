this.Spellbook.Classes.Toggle = (function() {
  Toggle.prototype._settings = {};

  function Toggle(options) {
    this.init(options);
  }

  Toggle.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-toggle'),
      proximity: 'next',
      event: 'click',
      toggleClass: 'is-hidden',
      activeClass: 'is-active',
      initialState: null,
      onClick: null,
      onMouseover: null,
      onMouseout: null
    }, options);
    return this._setEventHandlers();
  };

  Toggle.prototype._setEventHandlers = function() {
    switch (this._settings.event) {
      case 'click':
        return this._handleClickEvent();
      case 'hover':
        return this._handleHoverEvent();
    }
  };

  Toggle.prototype._handleClickEvent = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var $element, base;
        event.preventDefault();
        $element = $(event.currentTarget);
        if (typeof (base = _this._settings).onClick === "function") {
          base.onClick(_this._settings);
        }
        _this._settings.$element.toggleClass(_this._settings.activeClass);
        switch (_this._settings.proximity) {
          case 'next':
            return $element.next().toggleClass(_this._settings.toggleClass);
          case 'prev':
            return $element.prev().toggleClass(_this._settings.toggleClass);
          case 'nextParent':
            return $element.parent().next().toggleClass(_this._settings.toggleClass);
          case 'prevParent':
            return $element.parent().prev().toggleClass(_this._settings.toggleClass);
          default:
            if (typeof _this._settings.proximity === 'object') {
              return _this._settings.proximity.toggleClass(_this._settings.toggleClass);
            } else {
              return $element.find(_this._settings.proximity).toggleClass(_this._settings.toggleClass);
            }
        }
      };
    })(this));
  };

  Toggle.prototype._handleHoverEvent = function() {
    if (this._settings.initialState) {
      this._settings.initialState(this._settings);
    }
    return this._settings.$element.on({
      mouseenter: (function(_this) {
        return function(event) {
          return _this._handleHoverStateEvent($(event.currentTarget), 'on');
        };
      })(this),
      mouseleave: (function(_this) {
        return function(event) {
          return _this._handleHoverStateEvent($(event.currentTarget), 'off');
        };
      })(this)
    });
  };

  Toggle.prototype._handleHoverStateEvent = function($element, state) {
    var base, base1;
    switch (state) {
      case 'on':
        if (typeof (base = this._settings).onMouseover === "function") {
          base.onMouseover(this._settings);
        }
        $element.addClass(this._settings.activeClass);
        break;
      case 'off':
        if (typeof (base1 = this._settings).onMouseout === "function") {
          base1.onMouseout(this._settings);
        }
        $element.removeClass(this._settings.activeClass);
    }
    switch (this._settings.proximity) {
      case 'next':
        return this._toggleClass($element.next());
      case 'prev':
        return this._toggleClass($element.prev());
      case 'nextParent':
        return this._toggleClass($element.parent().next());
      case 'prevParent':
        return this._toggleClass($element.parent().prev());
      default:
        if (typeof this._settings.proximity === 'object') {
          return this._toggleClass(this._settings.proximity);
        } else {
          return this._toggleClass($element.find(this._settings.proximity));
        }
    }
  };

  Toggle.prototype._toggleClass = function($element, classToToggle) {
    if (classToToggle == null) {
      classToToggle = this._settings.toggleClass;
    }
    if ($element.hasClass(classToToggle)) {
      return $element.removeClass(classToToggle);
    } else {
      return $element.addClass(classToToggle);
    }
  };

  return Toggle;

})();
