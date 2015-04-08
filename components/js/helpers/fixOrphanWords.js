this.Spellbook.Helpers.fixOrphanWords = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-orphan')
  }, options);
  return settings.$element.each(function() {
    var $element, finalTitle, i, j, ref, wordArray;
    $element = $(this);
    wordArray = $element.text().split(' ');
    finalTitle = '';
    for (i = j = 0, ref = wordArray.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      finalTitle += wordArray[i];
      if (i === (wordArray.length - 2)) {
        finalTitle += '&nbsp;';
      } else if (i === (wordArray.length - 1)) {
        finalTitle += '';
      } else {
        finalTitle += ' ';
      }
    }
    return $element.html(finalTitle);
  });
};
