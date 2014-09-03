this.Spellbook.filter = function(options) {
  var settings;
  settings = $.extend({
    link: $('.js-filter-link'),
    item: $('.js-filter-item'),
    activeLinkClass: 'is-active',
    hiddenItemClass: 'is-hidden'
  }, options);
  return settings.link.on('click', function(event) {
    var element, itemToShow;
    event.preventDefault();
    element = $(this);
    itemToShow = element.attr('href').split('#')[1];
    settings.link.removeClass(settings.activeLinkClass);
    element.toggleClass(settings.activeLinkClass);
    settings.link.removeClass(settings.hiddenItemClass);
    if (itemToShow !== 'all') {
      return settings.item.not("[data-item=" + itemToShow + "]").addClass(settings.hiddenItemClass);
    }
  });
};
