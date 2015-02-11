this.Spellbook.LiveSearch = (function() {
  var init, _isQueryFound, _parseDom, _query, _setEventHandlers, _settings;
  _settings = {};
  _query = '';
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-search'),
      $query: $('.js-search-query'),
      itemNode: '.js-search-item',
      hiddenClass: 'is-hidden',
      onKeyup: null,
      onFound: null,
      onEmpty: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      _query = $(this).val();
      if (_settings.onKeyup !== null) {
        _settings.onKeyup(_settings);
      }
      if (_query === '') {
        $(_settings.itemNode).removeClass(_settings.hiddenClass);
      }
      return _parseDom();
    });
  };
  _parseDom = function() {
    return _settings.$query.each(function(index) {
      var $element;
      $element = $(this);
      if (_isQueryFound($element)) {
        $element.closest(_settings.itemNode).addClass(_settings.hiddenClass);
        if (_settings.onFound !== null) {
          return _settings.onFound(_settings);
        }
      } else {
        $element.closest(_settings.itemNode).removeClass(_settings.hiddenClass);
        if (_settings.onEmpty !== null) {
          return _settings.onEmpty(_settings);
        }
      }
    });
  };
  _isQueryFound = function(element) {
    return element.text().search(new RegExp(_query, 'i')) < 0;
  };
  return {
    init: init
  };
})();
