var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.ClassName = (function(superClass) {
  extend(ClassName, superClass);

  ClassName._defaults = {
    $element: $('.js-element')
  };

  function ClassName(options) {
    ClassName.__super__.constructor.call(this, options);
    this._setEventHandlers();
  }

  ClassName.prototype._setEventHandlers = function() {};

  return ClassName;

})(this.Spellbook.Classes.Base);
