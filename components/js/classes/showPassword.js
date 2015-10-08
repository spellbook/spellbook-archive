var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.ShowPassword = (function(superClass) {
  extend(ShowPassword, superClass);

  function ShowPassword() {
    return ShowPassword.__super__.constructor.apply(this, arguments);
  }

  ShowPassword.prototype.init = function(options) {
    this._settings = $.extend({
      $input: $('.js-showPassword-input'),
      $toggle: $('.js-showPassword-toggle'),
      showByDefault: false
    }, options);
    this._setEventHandlers();
    if (this._settings.showByDefault) {
      return this._showPassword();
    }
  };

  ShowPassword.prototype._setEventHandlers = function() {
    return this._settings.$toggle.on('change', (function(_this) {
      return function(event) {
        var show;
        show = $(event.currentTarget).prop('checked');
        if (show) {
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
