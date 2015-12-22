var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.QuantityInput = (function(superClass) {
  extend(QuantityInput, superClass);

  QuantityInput._defaults = {
    $decrease: $('.js-quantityInput-decrease'),
    $element: $('.js-quantityInput'),
    $field: $('.js-quantityInput-field'),
    $increase: $('.js-quantityInput-increase'),
    $target: $('.js-quantityInput-target'),
    onDecrease: null,
    onIncrease: null,
    onTargetUpdate: null,
    valueBase: 29,
    valueMax: 100,
    valueMin: 1,
    valuePrefix: '$'
  };

  function QuantityInput(options) {
    QuantityInput.__super__.constructor.call(this, options);
    this._value = null;
    this._setValue();
    this._setEventHandlers();
  }

  QuantityInput.prototype._setEventHandlers = function() {
    this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        _this._setValue();
        if (!(isNaN(_this._value) || _this._value < _this._settings.valueMin || _this._value > _this._settings.valueMax)) {
          return _this._updateValue();
        }
      };
    })(this));
    this._settings.$increase.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value >= _this._settings.valueMax)) {
          _this._updateValue('up');
        }
        return typeof (base = _this._settings).onIncrease === "function" ? base.onIncrease(_this._settings) : void 0;
      };
    })(this));
    return this._settings.$decrease.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value <= _this._settings.valueMin)) {
          _this._updateValue('down');
        }
        return typeof (base = _this._settings).onDecrease === "function" ? base.onDecrease(_this._settings) : void 0;
      };
    })(this));
  };

  QuantityInput.prototype._setValue = function() {
    return this._value = parseInt(this._settings.$element.val());
  };

  QuantityInput.prototype._updateTarget = function() {
    var updatedValue;
    updatedValue = this._value * this._settings.valueBase;
    return this._settings.$target.text("" + this._settings.valuePrefix + updatedValue);
  };

  QuantityInput.prototype._updateValue = function(direction) {
    var base;
    if (direction == null) {
      direction = '';
    }
    switch (direction) {
      case 'up':
        this._settings.$element.val(++this._value);
        break;
      case 'down':
        this._settings.$element.val(--this._value);
        break;
      default:
        this._settings.$element.val(this._value);
    }
    this._updateTarget();
    return typeof (base = this._settings).onTargetUpdate === "function" ? base.onTargetUpdate(this._settings) : void 0;
  };

  return QuantityInput;

})(Spellbook.Classes.Base);
