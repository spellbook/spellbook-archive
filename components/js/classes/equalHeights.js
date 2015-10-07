this.Spellbook.Classes.EqualHeights = (function() {
  EqualHeights.prototype._settings = {};

  EqualHeights.prototype._heights = [];

  EqualHeights.prototype._timer = null;

  function EqualHeights(options) {
    this.init(options);
  }

  EqualHeights.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-equalHeights')
    }, options);
    this._setHeight();
    return this._setEventHandlers();
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

  EqualHeights.prototype._setEventHandlers = function() {
    return $(window).on('resize', (function(_this) {
      return function() {
        clearTimeout(_this._timer);
        return _this._timer = setTimeout(_this._setHeight, 250);
      };
    })(this));
  };

  return EqualHeights;

})();
