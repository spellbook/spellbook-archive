this.Spellbook.Modules.ShowPassword = (function() {
  var _setEventHandlers, _settings, _showPassword, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $input: $('.js-showPassword-input'),
      $toggle: $('.js-showPassword-toggle'),
      showByDefault: false
    }, options);
    _setEventHandlers();
    if (_settings.showByDefault) {
      return _showPassword();
    }
  };
  _setEventHandlers = function() {
    return _settings.$toggle.on('change', function(event) {
      var show;
      show = $(this).prop('checked');
      if (show) {
        return _showPassword();
      } else {
        return _settings.$input.attr('type', 'password');
      }
    });
  };
  _showPassword = function() {
    _settings.$input.attr('type', 'text');
    return _settings.$toggle.prop('checked', true);
  };
  return {
    init: init
  };
})();
