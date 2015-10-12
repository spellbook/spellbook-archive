this.Spellbook.Services.focusFirstInput = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-focusFirstInput')
  }, options);
  return settings.$element.find('input, textarea, [contenteditable]').filter(':visible').first().trigger('focus');
};
