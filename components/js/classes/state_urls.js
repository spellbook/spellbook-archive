var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.StateUrls = (function(superClass) {
  extend(StateUrls, superClass);

  function StateUrls() {
    return StateUrls.__super__.constructor.apply(this, arguments);
  }

  StateUrls.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-stateUrls'),
      $link: $('.js-stateUrls-link'),
      classActive: 'is-active',
      classHidden: 'is-hidden',
      dataAttr: 'state'
    });
    this._setInitialState(this._getCurrentState());
    return this._setEventHandlers();
  };

  StateUrls.prototype._sanitizeHash = function(string) {
    return string.replace(/(<([^>]+)>)/ig, '');
  };

  StateUrls.prototype._getCurrentState = function() {
    var state;
    if (window.location.hash) {
      state = this._sanitizeHash(window.location.hash);
    } else {
      state = this._settings.$link.first().attr('href');
    }
    return state;
  };

  StateUrls.prototype._setInitialState = function(state) {
    this._settings.$element.not(state).addClass(this._settings.classHidden);
    return $("[data-" + this._settings.dataAttr + "=" + state + "]").removeClass(this._settings.classHidden).addClass(this._settings.classActive);
  };

  StateUrls.prototype._setEventHandlers = function() {
    return this._settings.$link.on('click', (function(_this) {
      return function(event) {
        var $element, state;
        event.preventDefault();
        $element = $(event.currentTarget);
        state = $element.attr('href');
        if (history.pushState) {
          history.pushState(null, null, state);
        } else {
          window.location.hash = state;
        }
        if ($(state).length > 0) {
          return _this._showSection($element, state);
        }
      };
    })(this));
  };

  StateUrls.prototype._showSection = function($element, state) {
    this._settings.$link.removeClass(this._settings.classActive);
    this._settings.$element.addClass(this._settings.classHidden);
    $element.addClass(this._settings.classActive);
    return $(state).removeClass(this._settings.classHidden);
  };

  return StateUrls;

})(Spellbook.Classes.Base);
