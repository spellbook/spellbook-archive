this.Spellbook.stateUrls = (function() {
  var init, _getCurrentState, _sanitizeHash, _setEventHandlers, _setInitialState, _settings, _showSection;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      link: $('.js-stateUrls-link'),
      section: $('.js-stateUrls-section'),
      hiddenClass: 'is-hidden',
      activeClass: 'is-active',
      dataAttribute: 'state'
    }, options);
    _setInitialState(_getCurrentState());
    return _setEventHandlers();
  };
  _sanitizeHash = function(string) {
    return string.replace(/(<([^>]+)>)/ig, '');
  };
  _getCurrentState = function() {
    var state;
    if (window.location.hash) {
      state = _sanitizeHash(window.location.hash);
    } else {
      state = _settings.link.first().attr('href');
    }
    return state;
  };
  _setInitialState = function(state) {
    _settings.section.not(state).addClass(_settings.hiddenClass);
    return $("[data-" + _settings.dataAttribute + "=" + state + "]").removeClass(_settings.hiddenClass).addClass(_settings.activeClass);
  };
  _setEventHandlers = function() {
    return _settings.link.on('click', function(event) {
      var element, state;
      event.preventDefault();
      element = $(this);
      state = element.attr('href');
      if (history.pushState) {
        history.pushState(null, null, state);
      } else {
        window.location.hash = state;
      }
      if ($(state).length > 0) {
        return _showSection(element, state);
      }
    });
  };
  _showSection = function(element, state) {
    _settings.link.removeClass(_settings.activeClass);
    _settings.section.addClass(_settings.hiddenClass);
    element.addClass(_settings.activeClass);
    return $(state).removeClass(_settings.hiddenClass);
  };
  return {
    init: init
  };
})();
