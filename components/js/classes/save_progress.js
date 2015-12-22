var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.SaveProgress = (function(superClass) {
  extend(SaveProgress, superClass);

  SaveProgress._defaults = {
    $container: $('.js-saveProgress-container'),
    $element: $('.js-saveProgress'),
    dataAttr: 'saveprogress'
  };

  function SaveProgress() {
    SaveProgress.__super__.constructor.apply(this, arguments);
    this._restoreProgress();
    this._setEventHandlers();
  }

  SaveProgress.prototype._eraseProgress = function(container) {
    return container.find(this._settings.$element).each((function(_this) {
      return function(index, elementNode) {
        var key;
        key = $(elementNode).data(_this._settings.dataAttr);
        return localStorage.removeItem(key);
      };
    })(this));
  };

  SaveProgress.prototype._restoreProgress = function() {
    return this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        var $element, key, value;
        $element = $(elementNode);
        key = $element.data(_this._settings.dataAttr);
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
        key = $element.data(_this._settings.dataAttr);
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
