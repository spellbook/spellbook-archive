this.Spellbook.dematerialize = function(options) {
  var item, settings;
  settings = $.extend({
    element: $('.js-dematerialize-element'),
    trigger: $('.js-dematerialize-trigger'),
    itemTitle: 'hidden_element',
    hiddenClass: 'is-hidden'
  }, options);
  item = localStorage.getItem(settings.itemTitle);
  if (item === null) {
    settings.element.removeClass(settings.hiddenClass);
  } else {
    settings.element.addClass(settings.hiddenClass);
  }
  return settings.trigger.on('click', function(event) {
    event.preventDefault();
    settings.element.addClass(settings.hiddenClass);
    return localStorage.setItem(settings.itemTitle, true);
  });
};
