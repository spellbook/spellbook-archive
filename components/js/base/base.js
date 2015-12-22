this.Spellbook.Classes.Base = (function() {
  function Base(options) {
    this.options = options;
    this._settings = $.extend({}, this.constructor._defaults, this.options);
  }

  return Base;

})();
