var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Modal = (function(superClass) {
  extend(Modal, superClass);

  function Modal() {
    return Modal.__super__.constructor.apply(this, arguments);
  }

  Modal.prototype._$modal = null;

  Modal.prototype._$backdrop = null;

  Modal.prototype.init = function() {
    this._setDefaults({
      $trigger: $('.js-modal-trigger'),
      $close: $('.js-modal-close'),
      dataAttribute: 'modal',
      backdropClass: 'modal-backdrop',
      activeClass: 'is-active',
      inactiveClass: 'is-inactive',
      activeBodyClass: 'is-modal-active'
    });
    return this._setEventHandlers();
  };

  Modal.prototype.trigger = function($element, event, removeBackdrop, callback) {
    if (removeBackdrop == null) {
      removeBackdrop = false;
    }
    if (callback == null) {
      callback = null;
    }
    this._$modal = $element;
    switch (event) {
      case 'open':
        $element.addClass(this._settings.activeClass);
        $('body').addClass(this._settings.activeBodyClass);
        break;
      case 'close':
        $element.removeClass(this._settings.activeClass);
        $('body').removeClass(this._settings.activeBodyClass);
        this._cleanupEvents();
    }
    if (!removeBackdrop) {
      this._toggleOverlay(event);
    }
    if (typeof callback === "function") {
      callback();
    }
    return this._setActiveEventHandlers();
  };

  Modal.prototype._toggleOverlay = function(event) {
    switch (event) {
      case 'open':
        $('<div class=' + this._settings.backdropClass + '></div>').appendTo($('body'));
        this._$backdrop = $("." + this._settings.backdropClass);
        return setTimeout((function(_this) {
          return function() {
            return _this._$backdrop.addClass(_this._settings.activeClass);
          };
        })(this), 25);
      case 'close':
        this._$backdrop.removeClass(this._settings.activeClass);
        return setTimeout((function(_this) {
          return function() {
            return _this._$backdrop.remove();
          };
        })(this), 500);
    }
  };

  Modal.prototype._setEventHandlers = function() {
    return this._settings.$trigger.on('click', (function(_this) {
      return function(event) {
        var selector;
        event.preventDefault();
        selector = $(event.currentTarget).data(_this._settings.dataAttribute);
        _this._$modal = $(selector);
        return _this.trigger(_this._$modal, 'open');
      };
    })(this));
  };

  Modal.prototype._setActiveEventHandlers = function() {
    this._settings.$close.on('click', (function(_this) {
      return function(event) {
        event.preventDefault();
        return _this.trigger(_this._$modal, 'close');
      };
    })(this));
    this._$backdrop.on('click', (function(_this) {
      return function(event) {
        return _this.trigger(_this._$modal, 'close');
      };
    })(this));
    return $(document).on('keydown', (function(_this) {
      return function(event) {
        switch (event.which) {
          case 27:
            return _this.trigger(_this._$modal, 'close');
        }
      };
    })(this));
  };

  Modal.prototype._cleanupEvents = function() {
    this._settings.$close.off('click');
    return $(document).off('keydown');
  };

  return Modal;

})(Spellbook.Classes.Base);
