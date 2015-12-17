var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.ClassName = (function(superClass) {
  extend(ClassName, superClass);

  function ClassName() {
    return ClassName.__super__.constructor.apply(this, arguments);
  }

  ClassName.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-element')
    });
    return this._setEventHandlers();
  };

  ClassName.prototype._setEventHandlers = function() {};

  return ClassName;

})(this.Spellbook.Classes.Base);
