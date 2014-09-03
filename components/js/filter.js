this.Spellbook.filter = function(options) {
  var settings;
  settings = $.extend({
    link: $('.js-filter-link'),
    item: $('.js-filter-item'),
    activeClass: 'is-active',
    hiddenClass: 'is-hidden'
  }, options);
  return settings.link.on('click', function(event) {
    var element, itemToShow;
    event.preventDefault();
    element = $(this);
    itemToShow = element.attr('href').split('#')[1];
    settings.link.removeClass(settings.activeClass);
    element.toggleClass(settings.activeClass);
    if (itemToShow !== 'all') {
      settings.item.addClass(settings.hiddenClass);
      return $("[data-item=" + itemToShow + "]").removeClass(settings.hiddenClass);
    } else {
      return settings.item.removeClass(settings.hiddenClass);
    }
  });
};
