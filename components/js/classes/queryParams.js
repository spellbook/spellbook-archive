var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.QueryParams = (function(superClass) {
  extend(QueryParams, superClass);

  function QueryParams() {
    return QueryParams.__super__.constructor.apply(this, arguments);
  }

  QueryParams.prototype.params = {};

  QueryParams.prototype.variables = [];

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

})(Spellbook.Classes.Base);
