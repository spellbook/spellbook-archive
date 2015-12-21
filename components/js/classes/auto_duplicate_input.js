var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.AutoDuplicateInput = (function(superClass) {
  extend(AutoDuplicateInput, superClass);

  function AutoDuplicateInput() {
    return AutoDuplicateInput.__super__.constructor.apply(this, arguments);
  }

  AutoDuplicateInput.prototype._count = 0;

  AutoDuplicateInput.prototype._field = null;

  AutoDuplicateInput.prototype._validators = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

  AutoDuplicateInput.prototype.init = function() {
    this._setDefaults({
      $container: $('.js-autoDuplicateInput-container'),
      $element: $('.js-autoDuplicateInput'),
      classInvalid: 'is-invalid',
      classValid: 'is-valid',
      dataAttrCloned: 'cloned',
      dataAttrValidate: 'validate',
      onDuplicate: null,
      onInvalid: null,
      onValid: null
    });
    return this._setEventHandlers();
  };

  AutoDuplicateInput.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var base, base1, base2;
        event.preventDefault();
        _this._field = $(event.currentTarget);
        if (_this._isValid()) {
          _this._setInputState('valid');
          if (typeof (base = _this._settings).onValid === "function") {
            base.onValid(_this._settings);
          }
          if (_this._field.data('cloned') !== 'true') {
            _this._duplicate();
          }
          return typeof (base1 = _this._settings).onDuplicate === "function" ? base1.onDuplicate(_this._settings, _this._count) : void 0;
        } else {
          _this._setInputState('invalid');
          return typeof (base2 = _this._settings).onInvalid === "function" ? base2.onInvalid(_this._settings) : void 0;
        }
      };
    })(this));
  };

  AutoDuplicateInput.prototype._getValidationType = function() {
    return this._field.data(this._settings.dataAttrValidate);
  };

  AutoDuplicateInput.prototype._isValid = function() {
    var validator;
    validator = this._getValidationType(this._field);
    return this._validators["" + validator].test(this._field.val());
  };

  AutoDuplicateInput.prototype._duplicate = function() {
    ++this._count;
    return this._field.data(this._settings.dataAttrCloned, 'true').clone(true).appendTo(this._settings.$container).removeClass(this._settings.classValid).val('').data(this._settings.dataAttrCloned, '');
  };

  AutoDuplicateInput.prototype._setInputState = function(type) {
    switch (type) {
      case 'invalid':
        return this._field.removeClass(this._settings.classValid).addClass(this._settings.classInvalid);
      case 'valid':
        return this._field.removeClass(this._settings.classInvalid).addClass(this._settings.classValid);
    }
  };

  AutoDuplicateInput.prototype.getCount = function() {
    return this._count;
  };

  return AutoDuplicateInput;

})(Spellbook.Classes.Base);
