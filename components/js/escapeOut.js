this.Spellbook.escapeOut = function(options) {
  var settings;
  settings = $.extend({
    run: null
  }, options);
  return $(document).on('keyup', function(event) {
    switch (event.which) {
      case 27:
        return settings.run();
    }
  });
};
