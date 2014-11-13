this.Spellbook.filter = function(options) {
  var settings;
  settings = $.extend({
    link: $('.js-filter-link'),
    item: $('.js-filter-item'),
    itemsContainer: $('.js-filter-items'),
    activeClass: 'is-active',
    hiddenClass: 'is-hidden',
    emptyElement: $('<p>There are no items to show.</p>'),
    dataAttribute: 'item'
  }, options);
  return settings.link.on('click', function(event) {
    var dataItemToShow, element, itemToShow;
    event.preventDefault();
    element = $(this);
    itemToShow = element.attr('href').split('#')[1];
    settings.link.removeClass(settings.activeClass);
    element.toggleClass(settings.activeClass);
    if (itemToShow !== 'all') {
      settings.item.addClass(settings.hiddenClass);
      dataItemToShow = $("[data-" + settings.dataAttribute + "=" + itemToShow + "]");
      if (dataItemToShow.length > 0) {
        return dataItemToShow.removeClass(settings.hiddenClass);
      } else {
        return settings.itemsContainer.append(settings.emptyElement);
      }
    } else {
      return settings.item.removeClass(settings.hiddenClass);
    }
  });
};
