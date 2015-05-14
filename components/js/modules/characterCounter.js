this.Spellbook.Modules.CharacterCounter = (function() {
  var _count, _setEventHandlers, _settings, init;
  _settings = {};
  _count = 0;
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-characterCounter'),
      $label: $('.js-characterCounter-label'),
      errorClass: 'is-error',
      minChars: 0,
      maxChars: 140,
      onMaxExceeded: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      var $element;
      event.preventDefault();
      $element = $(this);
      _count = $(this).val().length;
      _settings.$label.text(_count);
      if (_count > _settings.maxChars) {
        $element.addClass(_settings.errorClass);
        if (_settings.onMaxExceeded != null) {
          return _settings.onMaxExceeded(_settings);
        }
      } else if (_count < _settings.minChars) {
        $element.addClass(_settings.errorClass);
        if (_settings.onMinPreceeded != null) {
          return _settings.onMinPreceeded(_settings);
        }
      } else {
        return $element.removeClass(_settings.errorClass);
      }
    });
  };
  return {
    init: init
  };
})();
