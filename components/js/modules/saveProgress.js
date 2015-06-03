this.Spellbook.Modules.SaveProgress = (function() {
  var _eraseProgress, _restoreProgress, _setEventHandlers, _settings, _storeProgress, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-saveProgress'),
      $container: $('.js-saveProgress-container'),
      dataAttribute: 'saveprogress'
    }, options);
    _restoreProgress();
    return _setEventHandlers();
  };
  _eraseProgress = function(container) {
    return container.find(_settings.$element).each(function() {
      var key;
      key = $(this).data(_settings.dataAttribute);
      return localStorage.removeItem(key);
    });
  };
  _restoreProgress = function() {
    return _settings.$element.each(function() {
      var $element, key, value;
      $element = $(this);
      key = $element.data(_settings.dataAttribute);
      value = localStorage.getItem(key);
      if (value !== null) {
        return $element.val(value);
      }
    });
  };
  _setEventHandlers = function() {
    _settings.$element.on('input', function() {
      var $element, key, value;
      $element = $(this);
      key = $element.data(_settings.dataAttribute);
      value = $element.val();
      return _storeProgress(key, value);
    });
    return _settings.$container.on('submit', function(event) {
      return _eraseProgress($(this));
    });
  };
  _storeProgress = function(key, value) {
    return localStorage.setItem(key, value);
  };
  return {
    init: init
  };
})();
