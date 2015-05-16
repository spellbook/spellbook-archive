this.Spellbook.Services.formPreview = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-formPreview-input'),
    idName: 'formPreview',
    dataAttr: 'preview',
    onKeyup: null
  }, options);
  return settings.$element.on('keyup', function(event) {
    var $element, index, value;
    $element = $(this);
    value = $element.val();
    index = $element.data(settings.dataAttr);
    $("#" + settings.idName + "-" + index).text(value);
    if (settings.onKeyup != null) {
      return settings.onKeyup(settings);
    }
  });
};
