var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.SaveProgress = (function(superClass) {
  extend(SaveProgress, superClass);

  function SaveProgress() {
    return SaveProgress.__super__.constructor.apply(this, arguments);
  }

  SaveProgress.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-saveProgress'),
      $container: $('.js-saveProgress-container'),
      dataAttribute: 'saveprogress'
    }, options);
    this._restoreProgress();
    return this._setEventHandlers();
  };

  SaveProgress.prototype._eraseProgress = function(container) {
    return container.find(this._settings.$element).each((function(_this) {
      return function(index, elementNode) {
        var key;
        key = $(elementNode).data(_this._settings.dataAttribute);
        return localStorage.removeItem(key);
      };
    })(this));
  };

  SaveProgress.prototype._restoreProgress = function() {
    return this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        var $element, key, value;
        $element = $(elementNode);
        key = $element.data(_this._settings.dataAttribute);
        value = localStorage.getItem(key);
        if (value !== null) {
          return $element.val(value);
        }
      };
    })(this));
  };

  SaveProgress.prototype._setEventHandlers = function() {
    this._settings.$element.on('input', (function(_this) {
      return function(event) {
        var $element, key, value;
        $element = $(event.currentTarget);
        key = $element.data(_this._settings.dataAttribute);
        value = $element.val();
        return _this._storeProgress(key, value);
      };
    })(this));
    return this._settings.$container.on('submit', (function(_this) {
      return function(event) {
        return _this._eraseProgress($(event.currentTarget));
      };
    })(this));
  };

  SaveProgress.prototype._storeProgress = function(key, value) {
    return localStorage.setItem(key, value);
  };

  return SaveProgress;

})(Spellbook.Classes.Base);
