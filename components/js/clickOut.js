this.Spellbook.clickOut = function(options) {
  var settings;
  settings = $.extend({
    element: $('.js-clickout')
  }, options);
  $(document).on('click', function() {
    return settings.run();
  });
  return settings.element.on('click', function(event) {
    return event.stopPropagation();
  });
};
