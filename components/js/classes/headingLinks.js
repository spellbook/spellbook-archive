this.Spellbook.Classes.HeadingLinks = (function() {
  var _settings;

  _settings = {};

  function HeadingLinks(options) {
    this.init(options);
  }

  HeadingLinks.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('h1, h2, h3, h4, h5'),
      anchorClass: 'anchor'
    }, options);
    return this._addAnchors();
  };

  HeadingLinks.prototype._slugify = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
  };

  HeadingLinks.prototype._addAnchors = function() {
    return this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        var $element, slug;
        $element = $(elementNode);
        slug = _this._slugify($element.text());
        $element.attr('id', slug);
        return $element.prepend("<a class='" + _this._settings.anchorClass + "' href='#" + slug + "'>#</a>");
      };
    })(this));
  };

  return HeadingLinks;

})();
