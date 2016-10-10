this.Spellbook.Services.limiter = function(options) {
  var count, settings;
  settings = $.extend({
    $element: $('.js-limiter-element'),
    $toggle: $('.js-limiter-toggle'),
    classHidden: 'is-hidden',
    limit: 5
  }, options);
  count = settings.$element.length;
  if (count > settings.limit) {
    settings.$element.not(":lt(" + settings.limit + ")").addClass(settings.classHidden);
    return settings.$toggle.on('click', function(event) {
      event.preventDefault();
      $(this).remove();
      return settings.$element.removeClass(settings.classHidden);
    });
  } else {
    return settings.$toggle.remove();
  }
};
