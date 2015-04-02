this.Spellbook.QueryParams = (function() {
  QueryParams.prototype.params = {};

  QueryParams.prototype.variables = [];

  QueryParams.prototype._settings = {};

  function QueryParams(options) {
    this.options = options;
    this.init();
  }

  QueryParams.prototype.init = function() {
    this._settings = $.extend({
      url: null
    }, this.options);
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
    var i, len, pair, param, ref, results;
    ref = this.variables;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      param = ref[i];
      pair = param.split('=');
      if (pair[1] !== void 0) {
        results.push(this.params[pair[0]] = pair[1]);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  QueryParams.prototype.allParams = function() {
    return this.params;
  };

  QueryParams.prototype.matchParamKey = function(matcher) {
    var key, ref, value;
    ref = this.params;
    for (key in ref) {
      value = ref[key];
      if (matcher === key) {
        return true;
      }
    }
    return false;
  };

  QueryParams.prototype.matchParamValue = function(matcher) {
    var key, ref, value;
    ref = this.params;
    for (key in ref) {
      value = ref[key];
      if (matcher === value) {
        return true;
      }
    }
    return false;
  };

  return QueryParams;

})();
