this.Spellbook.Namespace.functionName = function(options) {
  return options.$element.on('click', function(event) {
    event.preventDefault();
    return $(this).toggleClass(options.className);
  });
};
