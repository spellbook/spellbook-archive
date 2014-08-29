this.Spellbook.headingLinks = (function() {
  var addAnchors, init, settings, slugify;
  settings = {};
  init = function(options) {
    settings = $.extend({
      headings: $('h1, h2, h3, h4, h5'),
      anchorClass: 'anchor'
    }, options);
    return addAnchors();
  };
  slugify = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
  };
  addAnchors = function() {
    return settings.headings.each(function() {
      var element, slug;
      element = $(this);
      slug = slugify(element.text());
      element.attr('id', slug);
      return element.prepend("<a class='" + settings.anchorClass + "' href='#" + slug + "'>#</a>");
    });
  };
  return {
    init: init
  };
})();
