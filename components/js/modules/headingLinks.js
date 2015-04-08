this.Spellbook.Modules.HeadingLinks = (function() {
  var _addAnchors, _settings, _slugify, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('h1, h2, h3, h4, h5'),
      anchorClass: 'anchor'
    }, options);
    return _addAnchors();
  };
  _slugify = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
  };
  _addAnchors = function() {
    return _settings.$element.each(function() {
      var $element, slug;
      $element = $(this);
      slug = _slugify($element.text());
      $element.attr('id', slug);
      return $element.prepend("<a class='" + _settings.anchorClass + "' href='#" + slug + "'>#</a>");
    });
  };
  return {
    init: init
  };
})();