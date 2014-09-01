this.Spellbook.QueryParams = (function() {
  QueryParams.prototype.params = {};

  QueryParams.prototype.variables = [];

  QueryParams.prototype._settings = {};

  function QueryParams(options) {
    this.options = options;
    this._settings = $.extend({
      url: null
    }, this.options);
    this.init();
  }

  QueryParams.prototype.init = function() {
    this._parseQueryString(this._settings.url);
    return this._sortParams();
  };

  QueryParams.prototype._parseQueryString = function(url) {
    var queryString;
    if (url) {
      queryString = url.split('?')[1];
    } else {
      queryString = window.location.search.substring(1);
    }
    return this.variables = queryString.split('&');
  };

  QueryParams.prototype._sortParams = function() {
    var pair, param, _i, _len, _ref, _results;
    _ref = this.variables;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      pair = param.split('=');
      if (pair[1] !== void 0) {
        _results.push(this.params[pair[0]] = pair[1]);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  QueryParams.prototype.allParams = function() {
    return this.params;
  };

  QueryParams.prototype.matchParamKey = function(matcher) {
    var key, value, _ref;
    _ref = this.params;
    for (key in _ref) {
      value = _ref[key];
      if (matcher === key) {
        return true;
      }
    }
    return false;
  };

  QueryParams.prototype.matchParamValue = function(matcher) {
    var key, value, _ref;
    _ref = this.params;
    for (key in _ref) {
      value = _ref[key];
      if (matcher === value) {
        return true;
      }
    }
    return false;
  };

  return QueryParams;

})();
