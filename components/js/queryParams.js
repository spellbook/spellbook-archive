this.Spellbook.QueryParams = (function() {
  function QueryParams() {
    this.init();
  }

  QueryParams.prototype.init = function() {
    this.params = {};
    this.variables = [];
    this.parseQueryString();
    return this.sortParams();
  };

  QueryParams.prototype.parseQueryString = function() {
    var queryString;
    queryString = window.location.search.substring(1);
    return this.variables = queryString.split('&');
  };

  QueryParams.prototype.sortParams = function() {
    var pair, param, _i, _len, _ref, _results;
    _ref = this.variables;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      pair = param.split("=");
      _results.push(this.params[pair[0]] = pair[1]);
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
      console.log(key);
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
      console.log(value);
      if (matcher === value) {
        return true;
      }
    }
    return false;
  };

  return QueryParams;

})();
