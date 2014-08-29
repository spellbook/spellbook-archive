this.Spellbook.escapeOut = function(options) {
  return $(document).on('keyup', function(event) {
    switch (event.which) {
      case 27:
        return options.run();
    }
  });
};
