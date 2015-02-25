this.Spellbook.selectText = function(options) {
  var selectElement, settings;
  settings = $.extend({
    $element: $('.js-selectText'),
    onClick: null
  }, options);
  selectElement = function($element) {
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
  return settings.$element.on('click', function() {
    selectElement($element);
    $(this).trigger('focus').trigger('select');
    if (settings.onClick != null) {
      return settings.onClick(settings);
    }
  });
};
