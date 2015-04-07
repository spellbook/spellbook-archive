this.Spellbook.Modules.ModuleName = (function() {
  var _setEventHandlers, _settings, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-element')
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {};
  return {
    init: init
  };
})();
