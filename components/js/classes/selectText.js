var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.SelectText = (function(superClass) {
  extend(SelectText, superClass);

  function SelectText() {
    return SelectText.__super__.constructor.apply(this, arguments);
  }

  SelectText.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-selectText'),
      onClick: null
    });
    return this._setEventHandlers();
  };

  SelectText.prototype._selectElement = function($element) {
    var elementNode, range, selection;
    elementNode = $element[0];
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(elementNode);
      return range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(elementNode);
      selection.removeAllRanges();
      return selection.addRange(range);
    }
  };

  SelectText.prototype._setEventHandlers = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var base;
        _this._selectElement(_this._settings.$element);
        $(event).trigger('focus').trigger('select');
        return typeof (base = _this._settings).onClick === "function" ? base.onClick(_this._settings) : void 0;
      };
    })(this));
  };

  return SelectText;

})(Spellbook.Classes.Base);
