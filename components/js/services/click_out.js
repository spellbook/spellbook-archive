this.Spellbook.Services.clickOut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-clickout'),
    run: null
  }, options);
  $(document).on('click', function() {
    return settings.run();
  });
  return settings.$element.on('click', function(event) {
    return event.stopPropagation();
  });
};
