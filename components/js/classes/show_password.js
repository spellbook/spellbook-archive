var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.ShowPassword = (function(superClass) {
  extend(ShowPassword, superClass);

  ShowPassword._defaults = {
    $input: $('.js-showPassword-input'),
    $toggle: $('.js-showPassword-toggle'),
    isShownByDefault: false
  };

  function ShowPassword(options) {
    ShowPassword.__super__.constructor.call(this, options);
    this._setEventHandlers();
    if (this._settings.isShownByDefault) {
      this._showPassword();
    }
  }

  ShowPassword.prototype._setEventHandlers = function() {
    return this._settings.$toggle.on('change', (function(_this) {
      return function(event) {
        var isShown;
        isShown = $(event.currentTarget).prop('checked');
        if (isShown) {
          return _this._showPassword();
        } else {
          return _this._settings.$input.attr('type', 'password');
        }
      };
    })(this));
  };

  ShowPassword.prototype._showPassword = function() {
    this._settings.$input.attr('type', 'text');
    return this._settings.$toggle.prop('checked', true);
  };

  return ShowPassword;

})(Spellbook.Classes.Base);
