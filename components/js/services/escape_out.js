this.Spellbook.Services.escapeOut = function(options) {
  var settings;
  settings = $.extend({
    callback: null
  }, options);
  return $(document).on('keyup', function(event) {
    switch (event.which) {
      case 27:
        return settings.callback();
    }
  });
};
