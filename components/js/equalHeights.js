this.Spellbook.equalHeights = function(options) {
  var height, heights, settings;
  settings = $.extend({
    element: $('.js-equalHeight')
  }, options);
  heights = [];
  settings.element.each(function() {
    return heights.push($(this).height());
  });
  height = Math.max.apply(Math, heights);
  return settings.element.css('height', height);
};
