this.Spellbook.autoSubmit = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-autoSubmit')
  }, options);
  return settings.$element.on('change', function() {
    return $(this).closest('form').trigger('submit');
  });
};
