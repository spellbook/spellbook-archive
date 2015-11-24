this.Spellbook.Services.scrollTrigger = function(options) {
  var active, scrolled, settings;
  settings = $.extend({
    $element: $('.js-scrollTrigger'),
    scrollPadding: 400,
    activeClass: 'is-active',
    onTrigger: null
  }, options);
  scrolled = $(window).scrollTop();
  if (settings.$element.offset().top >= 0) {
    active = scrolled - settings.$element.offset().top - settings.scrollPadding;
  }
  if (!settings.$element.hasClass(settings.activeClass) && active) {
    settings.$element.addClass(settings.activeClass);
    return typeof settings.onTrigger === "function" ? settings.onTrigger(settings) : void 0;
  }
};
