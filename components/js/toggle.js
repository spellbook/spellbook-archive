this.Spellbook.toggle = function(options) {
  var settings;
  settings = $.extend({
    sender: $('.js-toggle-sender'),
    proximity: 'next',
    event: 'click',
    proximityToggleClass: 'is-hidden',
    senderActiveClass: 'is-active'
  }, options);
  switch (settings.event) {
    case 'click':
      return settings.sender.on('click', function(event) {
        var element;
        event.preventDefault();
        element = $(this);
        settings.sender.toggleClass(settings.senderActiveClass);
        switch (settings.proximity) {
          case 'next':
            return element.next().toggleClass(settings.proximityToggleClass);
          case 'prev':
            return element.prev().toggleClass(settings.proximityToggleClass);
          case 'nextParent':
            return element.parent().next().toggleClass(settings.proximityToggleClass);
          case 'prevParent':
            return element.parent().prev().toggleClass(settings.proximityToggleClass);
          default:
            return settings.proximity.toggleClass(settings.proximityToggleClass);
        }
      });
    case 'hover':
      if (settings.initialState) {
        settings.initialState();
      }
      return settings.sender.on({
        mouseenter: function() {
          var element;
          element = $(this);
          element.addClass(settings.senderActiveClass);
          switch (settings.proximity) {
            case 'next':
              return element.next().addClass(settings.proximityToggleClass);
            case 'prev':
              return element.prev().addClass(settings.proximityToggleClass);
            case 'nextParent':
              return element.parent().next().addClass(settings.proximityToggleClass);
            case 'prevParent':
              return element.parent().prev().addClass(settings.proximityToggleClass);
            default:
              return settings.proximity.addClass(settings.proximityToggleClass);
          }
        },
        mouseleave: function() {
          var element;
          element = $(this);
          element.removeClass(settings.senderActiveClass);
          switch (settings.proximity) {
            case 'next':
              return element.next().removeClass(settings.proximityToggleClass);
            case 'prev':
              return element.prev().removeClass(settings.proximityToggleClass);
            case 'nextParent':
              return element.parent().next().removeClass(settings.proximityToggleClass);
            case 'prevParent':
              return element.parent().prev().removeClass(settings.proximityToggleClass);
            default:
              return settings.proximity.removeClass(settings.proximityToggleClass);
          }
        }
      });
  }
};
