this.Spellbook.Services.clickOut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-clickout'),
    callback: null
  }, options);
  $(document).on('click', function() {
    return settings.callback();
  });
  return settings.$element.on('click', function(event) {
    return event.stopPropagation();
  });
};
