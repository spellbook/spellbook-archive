this.Spellbook.filter = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-filter'),
    $item: $('.js-filter-item'),
    $link: $('.js-filter-link'),
    $empty: $('<p>There are no items to show.</p>'),
    activeClass: 'is-active',
    hiddenClass: 'is-hidden',
    dataAttribute: 'item'
  }, options);
  return settings.$link.on('click', function(event) {
    var $element, dataItemToShow, itemToShow;
    event.preventDefault();
    $element = $(this);
    itemToShow = $element.attr('href').split('#')[1];
    settings.$link.removeClass(settings.activeClass);
    $element.toggleClass(settings.activeClass);
    if (itemToShow !== 'all') {
      settings.$item.addClass(settings.hiddenClass);
      dataItemToShow = $("[data-" + settings.dataAttribute + "=" + itemToShow + "]");
      if (dataItemToShow.length > 0) {
        return dataItemToShow.removeClass(settings.hiddenClass);
      } else {
        return settings.$element.append(settings.$empty);
      }
    } else {
      return settings.$item.removeClass(settings.hiddenClass);
    }
  });
};
