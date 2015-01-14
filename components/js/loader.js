this.Spellbook.loader = function(options) {
  var settings;
  settings = $.extend({
    element: $('.js-loader-element'),
    toggle: $('.js-loader-toggle'),
    spinner: $('<span></span>'),
    spinnerClass: 'loader',
    overlay: $('<div></div>'),
    overlayClass: 'loader-overlay',
    loadingClass: 'is-loading'
  }, options);
  return settings.toggle.on('click', function(event) {
    settings.element.toggleClass(settings.loadingClass);
    settings.element.append(settings.spinner);
    settings.spinner.addClass(settings.spinnerClass);
    settings.element.append(settings.overlay);
    return settings.overlay.addClass(settings.overlayClass);
  });
};
