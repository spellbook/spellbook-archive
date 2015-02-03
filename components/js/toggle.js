this.Spellbook.toggle = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-toggle'),
    proximity: 'next',
    event: 'click',
    toggleClass: 'is-hidden',
    activeClass: 'is-active'
  }, options);
  switch (settings.event) {
    case 'click':
      return settings.$element.on('click', function(event) {
        var $element;
        event.preventDefault();
        $element = $(this);
        settings.$element.toggleClass(settings.activeClass);
        switch (settings.proximity) {
          case 'next':
            return $element.next().toggleClass(settings.toggleClass);
          case 'prev':
            return $element.prev().toggleClass(settings.toggleClass);
          case 'nextParent':
            return $element.parent().next().toggleClass(settings.toggleClass);
          case 'prevParent':
            return $element.parent().prev().toggleClass(settings.toggleClass);
          default:
            return settings.proximity.toggleClass(settings.toggleClass);
        }
      });
    case 'hover':
      if (settings.initialState) {
        settings.initialState();
      }
      return settings.$element.on({
        mouseenter: function() {
          var $element;
          $element = $(this);
          $element.addClass(settings.activeClass);
          switch (settings.proximity) {
            case 'next':
              return $element.next().addClass(settings.toggleClass);
            case 'prev':
              return $element.prev().addClass(settings.toggleClass);
            case 'nextParent':
              return $element.parent().next().addClass(settings.toggleClass);
            case 'prevParent':
              return $element.parent().prev().addClass(settings.toggleClass);
            default:
              return settings.proximity.addClass(settings.toggleClass);
          }
        },
        mouseleave: function() {
          var $element;
          $element = $(this);
          $element.removeClass(settings.activeClass);
          switch (settings.proximity) {
            case 'next':
              return $element.next().removeClass(settings.toggleClass);
            case 'prev':
              return $element.prev().removeClass(settings.toggleClass);
            case 'nextParent':
              return $element.parent().next().removeClass(settings.toggleClass);
            case 'prevParent':
              return $element.parent().prev().removeClass(settings.toggleClass);
            default:
              return settings.proximity.removeClass(settings.toggleClass);
          }
        }
      });
  }
};
