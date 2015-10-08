this.Spellbook.Classes.StateUrls = (function() {
  StateUrls.prototype._settings = {};

  function StateUrls(options) {
    this.init(options);
  }

  StateUrls.prototype.init = function(options) {
    this._settings = $.extend({
      $element: $('.js-stateUrls'),
      $link: $('.js-stateUrls-link'),
      hiddenClass: 'is-hidden',
      activeClass: 'is-active',
      dataAttribute: 'state'
    }, options);
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
    this._settings.$element.not(state).addClass(this._settings.hiddenClass);
    return $("[data-" + this._settings.dataAttribute + "=" + state + "]").removeClass(this._settings.hiddenClass).addClass(this._settings.activeClass);
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
    this._settings.$link.removeClass(this._settings.activeClass);
    this._settings.$element.addClass(this._settings.hiddenClass);
    $element.addClass(this._settings.activeClass);
    return $(state).removeClass(this._settings.hiddenClass);
  };

  return StateUrls;

})();
