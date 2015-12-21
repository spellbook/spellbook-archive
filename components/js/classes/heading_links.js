var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.HeadingLinks = (function(superClass) {
  extend(HeadingLinks, superClass);

  function HeadingLinks() {
    return HeadingLinks.__super__.constructor.apply(this, arguments);
  }

  HeadingLinks.prototype.init = function() {
    this._setDefaults({
      $element: $('h1, h2, h3, h4, h5'),
      classAnchor: 'anchor'
    });
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
        return $element.prepend("<a class='" + _this._settings.classAnchor + "' href='#" + slug + "'>#</a>");
      };
    })(this));
  };

  return HeadingLinks;

})(Spellbook.Classes.Base);
