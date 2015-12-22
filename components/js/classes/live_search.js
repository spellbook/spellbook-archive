var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.LiveSearch = (function(superClass) {
  extend(LiveSearch, superClass);

  function LiveSearch() {
    return LiveSearch.__super__.constructor.apply(this, arguments);
  }

  LiveSearch.prototype._query = '';

  LiveSearch.prototype.init = function() {
    this._setDefaults({
      $container: $('.js-search-container'),
      $element: $('.js-search'),
      $query: $('.js-search-query'),
      classHidden: 'is-hidden',
      isEmptyMessageShown: true,
      onClear: null,
      onEmpty: null,
      onFound: null,
      onKeyup: null,
      selectorEmpty: '.js-search-empty',
      selectorItem: '.js-search-item'
    });
    return this._setEventHandlers();
  };

  LiveSearch.prototype._clearEmptyMessage = function() {
    if (this._settings.isEmptyMessageShown && $(this._settings.selectorEmpty).length > 0) {
      return $(this._settings.selectorEmpty).remove();
    }
  };

  LiveSearch.prototype._handleEmptyResults = function() {
    var base, emptyClass;
    if (this._isEmpty()) {
      if (this._settings.isEmptyMessageShown) {
        emptyClass = this._settings.selectorEmpty.replace('.', '');
      }
      $("<p class='" + emptyClass + "'>\n  There are no results matching '" + this._query + "'.\n</p>").insertAfter(this._settings.$container);
      return typeof (base = this._settings).onEmpty === "function" ? base.onEmpty(this._settings) : void 0;
    }
  };

  LiveSearch.prototype._isEmpty = function() {
    return $(this._settings.selectorItem + "." + this._settings.classHidden).length === $(this._settings.selectorItem).length;
  };

  LiveSearch.prototype._isQueryAbsent = function(element) {
    return element.text().search(new RegExp(this._query, 'i')) < 0;
  };

  LiveSearch.prototype._parseDom = function() {
    this._settings.$query.each((function(_this) {
      return function(index, elementNode) {
        var $element, base;
        $element = $(elementNode);
        if (_this._isQueryAbsent($element)) {
          return $element.closest(_this._settings.selectorItem).addClass(_this._settings.classHidden);
        } else {
          $element.closest(_this._settings.selectorItem).removeClass(_this._settings.classHidden);
          return typeof (base = _this._settings).onFound === "function" ? base.onFound(_this._settings) : void 0;
        }
      };
    })(this));
    return this._handleEmptyResults();
  };

  LiveSearch.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var base, base1;
        _this._query = $(event.currentTarget).val();
        if (typeof (base = _this._settings).onKeyup === "function") {
          base.onKeyup(_this._settings);
        }
        if (_this._query === '') {
          $(_this._settings.selectorItem).removeClass(_this._settings.classHidden);
          _this._clearEmptyMessage();
          if (typeof (base1 = _this._settings).onClear === "function") {
            base1.onClear(_this._settings);
          }
        }
        _this._clearEmptyMessage();
        return _this._parseDom();
      };
    })(this));
  };

  return LiveSearch;

})(Spellbook.Classes.Base);
