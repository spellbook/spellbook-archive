this.Spellbook.Services.scrollTrigger = function(options) {
  var active, scrolled, settings;
  settings = $.extend({
    $element: $('.js-scrollTrigger'),
    classActive: 'is-active',
    onTrigger: null,
    scrollPadding: 400
  }, options);
  scrolled = $(window).scrollTop();
  if (settings.$element.offset().top >= 0) {
    active = scrolled - settings.$element.offset().top - settings.scrollPadding;
  }
  if (!settings.$element.hasClass(settings.classActive) && active) {
    settings.$element.addClass(settings.classActive);
    return typeof settings.onTrigger === "function" ? settings.onTrigger(settings) : void 0;
  }
};
