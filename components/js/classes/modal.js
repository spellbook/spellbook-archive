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
      $close: $('.js-modal-close'),
      $trigger: $('.js-modal-trigger'),
      classActive: 'is-active',
      classBackdrop: 'modal-backdrop',
      classBodyActive: 'is-modal-active',
      classInactive: 'is-inactive',
      dataAttr: 'modal'
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
        $element.addClass(this._settings.classActive);
        $('body').addClass(this._settings.classBodyActive);
        break;
      case 'close':
        $element.removeClass(this._settings.classActive);
        $('body').removeClass(this._settings.classBodyActive);
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
        $('<div class=' + this._settings.classBackdrop + '></div>').appendTo($('body'));
        this._$backdrop = $("." + this._settings.classBackdrop);
        return setTimeout((function(_this) {
          return function() {
            return _this._$backdrop.addClass(_this._settings.classActive);
          };
        })(this), 25);
      case 'close':
        this._$backdrop.removeClass(this._settings.classActive);
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
        selector = $(event.currentTarget).data(_this._settings.dataAttr);
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
