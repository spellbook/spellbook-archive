this.Spellbook.Classes.ClassName = (function() {
  ClassName.prototype._settings = {};

  function ClassName(options) {
    this.options = options;
    this.init();
  }

  ClassName.prototype.init = function() {
    this._settings = $.extend({
      $element: $('.js-element')
    }, this.options);
    return this._setEventHandlers();
  };

  ClassName.prototype._setEventHandlers = function() {};

  return ClassName;

})();
