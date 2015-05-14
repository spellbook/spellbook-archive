this.Spellbook.Modules.CharacterCounter = (function() {
  var _count, _setEventHandlers, _settings, _toggleState, init;
  _settings = {};
  _count = 0;
  init = function(options) {
    _settings = $.extend({
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
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      var $element;
      event.preventDefault();
      $element = $(this);
      _count = $element.val().length;
      _settings.$number.text(_count);
      if (_count > _settings.maxChars) {
        _toggleState($element, 'error');
        if (_settings.onMaxExceeded != null) {
          return _settings.onMaxExceeded(_settings);
        }
      } else if (_count < _settings.minChars) {
        _toggleState($element, 'error');
        if (_settings.onMinPreceeded != null) {
          return _settings.onMinPreceeded(_settings);
        }
      } else {
        _toggleState($element, 'success');
        if (_settings.onConditionsMet != null) {
          return _settings.onConditionsMet(_settings);
        }
      }
    });
  };
  _toggleState = function(element, state) {
    switch (state) {
      case 'error':
        element.removeClass(_settings.successClass);
        _settings.$label.removeClass(_settings.successClass);
        element.addClass(_settings.errorClass);
        return _settings.$label.addClass(_settings.errorClass);
      case 'success':
        element.removeClass(_settings.errorClass);
        _settings.$label.removeClass(_settings.errorClass);
        element.addClass(_settings.successClass);
        return _settings.$label.addClass(_settings.successClass);
    }
  };
  return {
    init: init
  };
})();
