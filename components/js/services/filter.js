this.Spellbook.Services.filter = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-filter'),
    $empty: $('<p>There are no items to show.</p>'),
    $item: $('.js-filter-item'),
    $link: $('.js-filter-link'),
    classActive: 'is-active',
    classHidden: 'is-hidden',
    dataAttr: 'item'
  }, options);
  return settings.$link.on('click', function(event) {
    var $element, dataItemToShow, itemToShow;
    event.preventDefault();
    $element = $(this);
    itemToShow = $element.attr('href').split('#')[1];
    settings.$link.removeClass(settings.classActive);
    $element.toggleClass(settings.classActive);
    if (itemToShow !== 'all') {
      settings.$item.addClass(settings.classHidden);
      dataItemToShow = $("[data-" + settings.dataAttr + "=" + itemToShow + "]");
      if (dataItemToShow.length > 0) {
        return dataItemToShow.removeClass(settings.classHidden);
      } else {
        return settings.$element.append(settings.$empty);
      }
    } else {
      return settings.$item.removeClass(settings.classHidden);
    }
  });
};
