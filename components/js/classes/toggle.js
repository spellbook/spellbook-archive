var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Toggle = (function(superClass) {
  extend(Toggle, superClass);

  Toggle._defaults = {
    $element: $('.js-toggle'),
    classActive: 'is-active',
    classToggle: 'is-hidden',
    event: 'click',
    onClick: null,
    onInitialState: null,
    onMouseout: null,
    onMouseover: null,
    proximity: 'next'
  };

  function Toggle(options) {
    Toggle.__super__.constructor.call(this, options);
    this._setEventHandlers();
  }

  Toggle.prototype._handleClickEvent = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var $element, base;
        event.preventDefault();
        $element = $(event.currentTarget);
        if (typeof (base = _this._settings).onClick === "function") {
          base.onClick(_this._settings);
        }
        _this._settings.$element.toggleClass(_this._settings.classActive);
        switch (_this._settings.proximity) {
          case 'next':
            return $element.next().toggleClass(_this._settings.classToggle);
          case 'prev':
            return $element.prev().toggleClass(_this._settings.classToggle);
          case 'nextParent':
            return $element.parent().next().toggleClass(_this._settings.classToggle);
          case 'prevParent':
            return $element.parent().prev().toggleClass(_this._settings.classToggle);
          default:
            if (typeof _this._settings.proximity === 'object') {
              return _this._settings.proximity.toggleClass(_this._settings.classToggle);
            } else {
              return $element.find(_this._settings.proximity).toggleClass(_this._settings.classToggle);
            }
        }
      };
    })(this));
  };

  Toggle.prototype._handleHoverEvent = function() {
    if (this._settings.onInitialState) {
      this._settings.onInitialState(this._settings);
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
        $element.addClass(this._settings.classActive);
        break;
      case 'off':
        if (typeof (base1 = this._settings).onMouseout === "function") {
          base1.onMouseout(this._settings);
        }
        $element.removeClass(this._settings.classActive);
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

  Toggle.prototype._setEventHandlers = function() {
    switch (this._settings.event) {
      case 'click':
        return this._handleClickEvent();
      case 'hover':
        return this._handleHoverEvent();
    }
  };

  Toggle.prototype._toggleClass = function($element, classToToggle) {
    if (classToToggle == null) {
      classToToggle = this._settings.classToggle;
    }
    if ($element.hasClass(classToToggle)) {
      return $element.removeClass(classToToggle);
    } else {
      return $element.addClass(classToToggle);
    }
  };

  return Toggle;

})(Spellbook.Classes.Base);
