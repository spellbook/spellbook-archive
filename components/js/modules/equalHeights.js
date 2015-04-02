this.Spellbook.Modules.EqualHeights = (function() {
  var _heights, _setEventHandlers, _setHeight, _settings, _timer, init;
  _settings = {};
  _heights = [];
  _timer = null;
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-equalHeights')
    }, options);
    _setHeight();
    return _setEventHandlers();
  };
  _setHeight = function() {
    var height;
    _settings.$element.css('height', 'auto');
    _settings.$element.each(function() {
      return _heights.push($(this).height());
    });
    height = Math.max.apply(Math, _heights);
    return _settings.$element.css('height', height);
  };
  _setEventHandlers = function() {
    return $(window).on('resize', function() {
      clearTimeout(_timer);
      return _timer = setTimeout(_setHeight, 250);
    });
  };
  return {
    init: init
  };
})();
