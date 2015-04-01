this.Spellbook.selectText = (function() {
  var _selectElement, _setEventHandlers, _settings, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-selectText'),
      onClick: null
    }, options);
    return _setEventHandlers();
  };
  _selectElement = function($element) {
    var node, range, selection;
    node = $element[0];
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(node);
      return range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      return selection.addRange(range);
    }
  };
  _setEventHandlers = function() {
    return _settings.$element.on('click', function() {
      _selectElement(_settings.$element);
      $(this).trigger('focus').trigger('select');
      if (_settings.onClick != null) {
        return _settings.onClick(_settings);
      }
    });
  };
  return {
    init: init
  };
})();
