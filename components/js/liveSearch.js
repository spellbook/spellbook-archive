this.Spellbook.LiveSearch = (function() {
  var init, _clearEmptyMessage, _handleEmptyResults, _isEmpty, _isQueryAbsent, _parseDom, _query, _setEventHandlers, _settings;
  _settings = {};
  _query = '';
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-search'),
      $query: $('.js-search-query'),
      itemNode: '.js-search-item',
      hiddenClass: 'is-hidden',
      emptyMessage: true,
      emptyNode: '.js-search-empty',
      onClear: null,
      onEmpty: null,
      onFound: null,
      onKeyup: null
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
        _clearEmptyMessage();
        if (_settings.onClear !== null) {
          _settings.onClear(_settings);
        }
      }
      _clearEmptyMessage();
      return _parseDom();
    });
  };
  _parseDom = function() {
    _settings.$query.each(function(index) {
      var $element;
      $element = $(this);
      if (_isQueryAbsent($element)) {
        return $element.closest(_settings.itemNode).addClass(_settings.hiddenClass);
      } else {
        $element.closest(_settings.itemNode).removeClass(_settings.hiddenClass);
        if (_settings.onFound !== null) {
          return _settings.onFound(_settings);
        }
      }
    });
    return _handleEmptyResults();
  };
  _clearEmptyMessage = function() {
    if (_settings.emptyMessage && $(_settings.emptyNode).length > 0) {
      return $(_settings.emptyNode).remove();
    }
  };
  _handleEmptyResults = function() {
    var emptyClass;
    if (_isEmpty()) {
      if (_settings.emptyMessage) {
        emptyClass = _settings.emptyNode.replace('.', '');
      }
      $("<p class='" + emptyClass + "'>\n  There are no results matching '" + _query + "'.\n</p>").insertAfter($(_settings.itemNode).last());
      if (_settings.onEmpty !== null) {
        return _settings.onEmpty(_settings);
      }
    }
  };
  _isQueryAbsent = function(element) {
    return element.text().search(new RegExp(_query, 'i')) < 0;
  };
  _isEmpty = function() {
    return $("" + _settings.itemNode + "." + _settings.hiddenClass).length === $(_settings.itemNode).length;
  };
  return {
    init: init
  };
})();
