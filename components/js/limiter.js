this.Spellbook.limiter = function(options) {
  var count, settings;
  settings = $.extend({
    elements: $('.js-limiter-element'),
    toggle: $('.js-limiter-toggle'),
    limit: 5,
    hiddenClass: 'is-hidden'
  }, options);
  count = settings.elements.length;
  if (count > settings.limit) {
    settings.elements.not(":lt(" + settings.limit + ")").addClass(settings.hiddenClass);
    return settings.toggle.on('click', function(event) {
      event.preventDefault();
      $(this).remove();
      return settings.elements.removeClass(settings.hiddenClass);
    });
  } else {
    return settings.toggle.remove();
  }
};
