var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.CharacterCounter = (function(superClass) {
  extend(CharacterCounter, superClass);

  function CharacterCounter() {
    return CharacterCounter.__super__.constructor.apply(this, arguments);
  }

  CharacterCounter.prototype._count = 0;

  CharacterCounter.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-characterCounter'),
      $label: $('.js-characterCounter-label'),
      $number: $('.js-characterCounter-number'),
      errorClass: 'is-error',
      successClass: 'is-success',
      minChars: 0,
      maxChars: 140,
      onMinPreceeded: null,
      onMaxExceeded: null,
      onConditionsMet: null
    }, options);
    return this._setEventHandlers();
  };

  CharacterCounter.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var $element, base, base1, base2;
        event.preventDefault();
        $element = $(event.currentTarget);
        _this._count = $element.val().length;
        _this._settings.$number.text(_this._count);
        if (_this._count > _this._settings.maxChars) {
          _this._toggleState($element, 'error');
          return typeof (base = _this._settings).onMaxExceeded === "function" ? base.onMaxExceeded(_this._settings) : void 0;
        } else if (_this._count < _this._settings.minChars) {
          _this._toggleState($element, 'error');
          return typeof (base1 = _this._settings).onMinPreceeded === "function" ? base1.onMinPreceeded(_this._settings) : void 0;
        } else {
          _this._toggleState($element, 'success');
          return typeof (base2 = _this._settings).onConditionsMet === "function" ? base2.onConditionsMet(_this._settings) : void 0;
        }
      };
    })(this));
  };

  CharacterCounter.prototype._toggleState = function(element, state) {
    switch (state) {
      case 'error':
        element.removeClass(this._settings.successClass);
        this._settings.$label.removeClass(this._settings.successClass);
        element.addClass(this._settings.errorClass);
        return this._settings.$label.addClass(this._settings.errorClass);
      case 'success':
        element.removeClass(this._settings.errorClass);
        this._settings.$label.removeClass(this._settings.errorClass);
        element.addClass(this._settings.successClass);
        return this._settings.$label.addClass(this._settings.successClass);
    }
  };

  return CharacterCounter;

})(Spellbook.Classes.Base);
