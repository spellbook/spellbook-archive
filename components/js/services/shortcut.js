this.Spellbook.Services.shortcut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('[data-shortcut]'),
    dataAttr: 'shortcut',
    keyCodes: Spellbook.Globals.keyCodes
  }, options);
  return settings.$element.each(function() {
    var key;
    key = settings.keyCodes[$(this).data(settings.dataAttr)];
    return $(document).on('keyup', (function(_this) {
      return function(event) {
        var $element, tag;
        $element = $(_this);
        tag = event.target.tagName.toLowerCase();
        if (!(tag === 'input' || tag === 'textarea')) {
          if (event.which === key) {
            $element.trigger('focus').trigger('click');
            if ($element.prop('tagName').toLowerCase() === 'a') {
              return window.location = $element.attr('href');
            }
          }
        }
      };
    })(this));
  });
};
