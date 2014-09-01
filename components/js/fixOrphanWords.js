this.Spellbook.fixOrphanWords = function(options) {
  var finalTitle, i, settings, wordArray, _i, _ref;
  settings = $.extend({
    element: $('.js-orphan')
  }, options);
  wordArray = settings.element.text().split(' ');
  finalTitle = '';
  for (i = _i = 0, _ref = wordArray.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    finalTitle += wordArray[i];
    if (i === (wordArray.length - 2)) {
      finalTitle += '&nbsp;';
    } else {
      finalTitle += ' ';
    }
  }
  return settings.element.html(finalTitle);
};
