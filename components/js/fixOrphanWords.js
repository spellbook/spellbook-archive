this.Spellbook.fixOrphanWords = function(options) {
  var _settings;
  _settings = $.extend({
    element: $('.js-orphan')
  }, options);
  return _settings.element.each(function() {
    var element, finalTitle, i, wordArray, _i, _ref;
    element = $(this);
    wordArray = element.text().split(' ');
    finalTitle = '';
    for (i = _i = 0, _ref = wordArray.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      finalTitle += wordArray[i];
      if (i === (wordArray.length - 2)) {
        finalTitle += '&nbsp;';
      } else if (i === (wordArray.length - 1)) {
        finalTitle += '';
      } else {
        finalTitle += ' ';
      }
    }
    return element.html(finalTitle);
  });
};
