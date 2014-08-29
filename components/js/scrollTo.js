this.Spellbook.scrollTo = function(options) {
  var settings;
  settings = $.extend({
    element: $('.js-scrollTo'),
    speed: 250
  }, options);
  return settings.element.on('click', function(event) {
    var to;
    event.preventDefault();
    to = settings.element.attr('href');
    return $('body, html').animate({
      scrollTop: parseInt($(to).offset().top)
    }, settings.speed);
  });
};
