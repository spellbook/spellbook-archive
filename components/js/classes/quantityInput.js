var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.QuantityInput = (function(superClass) {
  extend(QuantityInput, superClass);

  function QuantityInput() {
    return QuantityInput.__super__.constructor.apply(this, arguments);
  }

  QuantityInput.prototype._value = null;

  QuantityInput.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-quantityInput'),
      $field: $('.js-quantityInput-field'),
      $increase: $('.js-quantityInput-increase'),
      $decrease: $('.js-quantityInput-decrease'),
      $target: $('.js-quantityInput-target'),
      targetBaseValue: 29,
      targetValuePrefix: '$',
      minValue: 1,
      maxValue: 100,
      onIncrease: null,
      onDecrease: null,
      onTargetUpdate: null
    });
    this._setValue();
    return this._setEventHandlers();
  };

  QuantityInput.prototype._setValue = function() {
    return this._value = parseInt(this._settings.$element.val());
  };

  QuantityInput.prototype._setEventHandlers = function() {
    this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        _this._setValue();
        if (!(isNaN(_this._value) || _this._value < _this._settings.minValue || _this._value > _this._settings.maxValue)) {
          return _this._updateValue();
        }
      };
    })(this));
    this._settings.$increase.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value >= _this._settings.maxValue)) {
          _this._updateValue('up');
        }
        return typeof (base = _this._settings).onIncrease === "function" ? base.onIncrease(_this._settings) : void 0;
      };
    })(this));
    return this._settings.$decrease.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value <= _this._settings.minValue)) {
          _this._updateValue('down');
        }
        return typeof (base = _this._settings).onDecrease === "function" ? base.onDecrease(_this._settings) : void 0;
      };
    })(this));
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

  QuantityInput.prototype._updateTarget = function() {
    var updatedValue;
    updatedValue = this._value * this._settings.targetBaseValue;
    return this._settings.$target.text("" + this._settings.targetValuePrefix + updatedValue);
  };

  return QuantityInput;

})(Spellbook.Classes.Base);
