this.Spellbook.Classes.ShowPassword = (function() {
  ShowPassword.prototype._settings = {};

  function ShowPassword(options) {
    this.init(options);
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

})();
