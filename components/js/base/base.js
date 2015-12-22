this.Spellbook.Classes.Base = (function() {
  function Base(options) {
    this._settings = $.extend({}, this.constructor._defaults, options);
  }

  return Base;

})();
