this.Spellbook.stateUrls = (function() {
  var events, getCurrentState, init, sanitizeHash, setInitialState, settings;
  settings = {};
  init = function(options) {
    settings = $.extend({
      link: $('.js-stateUrls-link'),
      section: $('.js-stateUrls-section'),
      hiddenClass: 'is-hidden',
      activeClass: 'is-active'
    }, options);
    setInitialState(getCurrentState());
    return events();
  };
  sanitizeHash = function(string) {
    return string.replace(/(<([^>]+)>)/ig, '');
  };
  getCurrentState = function() {
    var state;
    if (window.location.hash) {
      state = sanitizeHash(window.location.hash);
    } else {
      state = settings.link.first().attr('href');
    }
    return state;
  };
  setInitialState = function(state) {
    settings.section.not(state).addClass(settings.hiddenClass);
    return $("[data-state=" + state + "]").removeClass(settings.hiddenClass).addClass(settings.activeClass);
  };
  events = function() {
    return settings.link.on('click', function(event) {
      var element, state;
      event.preventDefault();
      element = $(this);
      state = element.attr('href');
      if (history.pushState) {
        history.pushState(null, null, state);
      } else {
        window.location.hash = state;
      }
      settings.link.removeClass(settings.activeClass);
      settings.section.addClass(settings.hiddenClass);
      element.addClass(settings.activeClass);
      return $(state).removeClass(settings.hiddenClass);
    });
  };
  return {
    init: init
  };
})();
