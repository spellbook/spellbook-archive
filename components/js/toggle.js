Spellbook.toggle = function(options) {
  var settings;
  settings = $.extend({
    sender: $('.js-toggle-sender'),
    receiver: null,
    proximity: 'next',
    event: 'click',
    toggleClass: 'is-hidden'
  }, options);
  switch (settings.event) {
    case 'click':
      return settings.sender.on('click', function(event) {
        event.preventDefault();
        if (!settings.receiver) {
          switch (settings.proximity) {
            case 'next':
              return $(this).next().toggleClass(settings.toggleClass);
            case 'prev':
              return $(this).prev().toggleClass(settings.toggleClass);
            case 'nextParent':
              return $(this).parent().next().toggleClass(settings.toggleClass);
            case 'prevParent':
              return $(this).parent().prev().toggleClass(settings.toggleClass);
            default:
              return settings.proximity.toggleClass(settings.toggleClass);
          }
        } else {
          return settings.receiver.toggleClass(settings.toggleClass);
        }
      });
    case 'hover':
      if (settings.initialState) {
        settings.initialState();
      }
      return settings.sender.on({
        mouseenter: function() {
          switch (settings.proximity) {
            case 'next':
              return $(this).next().addClass(settings.toggleClass);
            case 'prev':
              return $(this).prev().addClass(settings.toggleClass);
            case 'nextParent':
              return $(this).parent().next().addClass(settings.toggleClass);
            case 'prevParent':
              return $(this).parent().prev().addClass(settings.toggleClass);
            default:
              return settings.proximity.addClass(settings.toggleClass);
          }
        },
        mouseleave: function() {
          switch (settings.proximity) {
            case 'next':
              return $(this).next().removeClass(settings.toggleClass);
            case 'prev':
              return $(this).prev().removeClass(settings.toggleClass);
            case 'nextParent':
              return $(this).parent().next().removeClass(settings.toggleClass);
            case 'prevParent':
              return $(this).parent().prev().removeClass(settings.toggleClass);
            default:
              return settings.proximity.removeClass(settings.toggleClass);
          }
        }
      });
  }
};
