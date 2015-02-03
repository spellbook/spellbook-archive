this.Spellbook.scrollTrigger = function(options) {
  var active, scrolled, settings;
  settings = $.extend({
    $element: $('.js-scrollTrigger'),
    scrollPadding: 400,
    activeClass: 'is-active'
  }, options);
  scrolled = $(window).scrollTop();
  if (settings.$element.offset().top >= 0) {
    active = scrolled - settings.$element.offset().top - settings.scrollPadding;
  }
  if (!settings.$element.hasClass(settings.activeClass) && active) {
    return settings.$element.addClass(settings.activeClass);
  }
};
