var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.EqualHeights = (function(superClass) {
  extend(EqualHeights, superClass);

  EqualHeights._defaults = {
    $element: $('.js-equalHeights')
  };

  function EqualHeights() {
    EqualHeights.__super__.constructor.apply(this, arguments);
    this._heights = [];
    this._timer = null;
    this._setHeight();
    this._setEventHandlers();
  }

  EqualHeights.prototype._setEventHandlers = function() {
    return $(window).on('resize', (function(_this) {
      return function() {
        clearTimeout(_this._timer);
        return _this._timer = setTimeout(_this._setHeight, 250);
      };
    })(this));
  };

  EqualHeights.prototype._setHeight = function() {
    var height;
    this._settings.$element.css('height', 'auto');
    this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        return _this._heights.push($(elementNode).height());
      };
    })(this));
    height = Math.max.apply(Math, this._heights);
    return this._settings.$element.css('height', height);
  };

  return EqualHeights;

})(Spellbook.Classes.Base);
