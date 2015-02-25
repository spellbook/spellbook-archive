this.Spellbook.AutoDuplicateInput = (function() {
  var getCount, init, _count, _duplicate, _field, _getValidationType, _isValid, _setEventHandlers, _setInputState, _settings, _validators;
  _settings = {};
  _count = 0;
  _field = null;
  _validators = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-autoDuplicateInput'),
      $container: $('.js-autoDuplicateInput-container'),
      clonedDataAttribute: 'cloned',
      validateDataAttribute: 'validate',
      invalidClass: 'is-invalid',
      validClass: 'is-valid',
      onDuplicate: null,
      onInvalid: null,
      onValid: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      event.preventDefault();
      _field = $(this);
      if (_isValid()) {
        _setInputState('valid');
        if (_settings.onValid != null) {
          _settings.onValid(_settings);
        }
        if (_field.data('cloned') !== 'true') {
          _duplicate();
        }
        if (_settings.onDuplicate != null) {
          return _settings.onDuplicate(_settings, _count);
        }
      } else {
        _setInputState('invalid');
        if (_settings.onInvalid != null) {
          return _settings.onInvalid(_settings);
        }
      }
    });
  };
  _getValidationType = function() {
    return _field.data(_settings.validateDataAttribute);
  };
  _isValid = function() {
    var validator;
    validator = _getValidationType(_field);
    return _validators["" + validator].test(_field.val());
  };
  _duplicate = function() {
    ++_count;
    return _field.data(_settings.clonedDataAttribute, 'true').clone(true).appendTo(_settings.$container).removeClass(_settings.validClass).val('').data(_settings.clonedDataAttribute, '');
  };
  _setInputState = function(type) {
    switch (type) {
      case 'invalid':
        return _field.removeClass(_settings.validClass).addClass(_settings.invalidClass);
      case 'valid':
        return _field.removeClass(_settings.invalidClass).addClass(_settings.validClass);
    }
  };
  getCount = function() {
    return _count;
  };
  return {
    init: init,
    getCount: getCount
  };
})();
