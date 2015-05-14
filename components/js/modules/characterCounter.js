this.Spellbook.Modules.CharacterCounter = (function() {
  var _count, _setEventHandlers, _settings, init;
  _settings = {};
  _count = 0;
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-characterCounter'),
      $label: $('.js-characterCounter-label'),
      $number: $('.js-characterCounter-number'),
      errorClass: 'is-error',
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
        $element.addClass(_settings.errorClass);
        _settings.$label.addClass(_settings.errorClass);
        if (_settings.onMaxExceeded != null) {
          return _settings.onMaxExceeded(_settings);
        }
      } else if (_count < _settings.minChars) {
        $element.addClass(_settings.errorClass);
        _settings.$label.addClass(_settings.errorClass);
        if (_settings.onMinPreceeded != null) {
          return _settings.onMinPreceeded(_settings);
        }
      } else {
        $element.removeClass(_settings.errorClass);
        _settings.$label.removeClass(_settings.errorClass);
        if (_settings.onConditionsMet != null) {
          return _settings.onConditionsMet(_settings);
        }
      }
    });
  };
  return {
    init: init
  };
})();
