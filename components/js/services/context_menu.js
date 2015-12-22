this.Spellbook.Services.contextMenu = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-contextMenu'),
    classActive: 'is-active'
  }, options);
  $(document).on('contextmenu', function(event) {
    event.preventDefault();
    return settings.$element.css({
      top: event.pageY + 'px',
      left: event.pageX + 'px'
    }).addClass(settings.classActive);
  });
  return $(document).on('click', function(event) {
    return settings.$element.removeClass(settings.classActive);
  });
};
