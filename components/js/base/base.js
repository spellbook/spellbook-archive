this.Spellbook.Classes.Base = (function() {
  Base.prototype._settings = {};

  function Base(options) {
    if (typeof this.init === "function") {
      this.init(options);
    }
  }

  return Base;

})();
