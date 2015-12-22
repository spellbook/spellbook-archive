this.Spellbook.Services.loader = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-loader-element'),
    $overlay: $('<div></div>'),
    $spinner: $('<span></span>'),
    $toggle: $('.js-loader-toggle'),
    classLoading: 'is-loading',
    classOverlay: 'loader-overlay',
    classSpinner: 'loader'
  }, options);
  return settings.$toggle.on('click', function(event) {
    settings.$element.toggleClass(settings.classLoading);
    settings.$element.append(settings.$spinner);
    settings.$spinner.addClass(settings.classSpinner);
    settings.$element.append(settings.$overlay);
    return settings.$overlay.addClass(settings.classOverlay);
  });
};
