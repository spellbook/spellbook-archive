this.Spellbook.QuantityInput = (function() {
  var init, _setEventHandlers, _setValue, _settings, _updateTarget, _updateValue, _value;
  _settings = {};
  _value = null;
  init = function(options) {
    _settings = $.extend({
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
    }, options);
    _setValue();
    return _setEventHandlers();
  };
  _setValue = function() {
    return _value = parseInt(_settings.$element.val());
  };
  _setEventHandlers = function() {
    _settings.$element.on('keyup', function(event) {
      _setValue();
      if (!(isNaN(_value) || _value < _settings.minValue || _value > _settings.maxValue)) {
        return _updateValue();
      }
    });
    _settings.$increase.on('click', function(event) {
      event.preventDefault();
      if (_value !== _settings.maxValue) {
        _updateValue('up');
      }
      if (_settings.onIncrease != null) {
        return _settings.onIncrease(_settings);
      }
    });
    return _settings.$decrease.on('click', function(event) {
      event.preventDefault();
      if (_value !== _settings.minValue) {
        _updateValue('down');
      }
      if (_settings.onDecrease != null) {
        return _settings.onDecrease(_settings);
      }
    });
  };
  _updateValue = function(direction) {
    if (direction == null) {
      direction = '';
    }
    switch (direction) {
      case 'up':
        _settings.$element.val(++_value);
        break;
      case 'down':
        _settings.$element.val(--_value);
        break;
      default:
        _settings.$element.val(_value);
    }
    _updateTarget();
    if (_settings.onTargetUpdate != null) {
      return _settings.onTargetUpdate(_settings);
    }
  };
  _updateTarget = function() {
    var updatedValue;
    updatedValue = _value * _settings.targetBaseValue;
    return _settings.$target.text("" + _settings.targetValuePrefix + updatedValue);
  };
  return {
    init: init
  };
})();
