this.Spellbook.Services.prefixClasses = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-prefixClasses'),
    query: '[ class ]',
    prefix: 'prefix'
  }, options);
  return settings.$element.find(settings.query).each(function() {
    var classArray, className, i, len, node, prefixedClasses;
    node = this;
    classArray = node.className.split(' ');
    prefixedClasses = '';
    for (i = 0, len = classArray.length; i < len; i++) {
      className = classArray[i];
      prefixedClasses = prefixedClasses + " " + settings.prefix + "-" + className;
    }
    return node.className = prefixedClasses;
  });
};
