this.Spellbook.Classes.Base = (function() {
  Base.prototype._settings = {};

  function Base(options) {
    this.options = options;
    if (typeof this.init === "function") {
      this.init();
    }
  }

  Base.prototype._setDefaults = function(defaults) {
    return this._settings = $.extend(defaults, this.options);
  };

  return Base;

})();
