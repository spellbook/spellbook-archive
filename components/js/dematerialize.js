this.Spellbook.dematerialize = (function() {
  var init, _item, _setEventHandlers, _setInitialState, _settings, _toggleState, _toggleStateViaKey;
  _settings = {};
  _item = '';
  init = function(options) {
    _settings = $.extend({
      element: $('.js-dematerialize-element'),
      trigger: $('.js-dematerialize-trigger'),
      itemTitle: 'hidden_element',
      hiddenClass: 'is-hidden'
    }, options);
    _setEventHandlers();
    return _setInitialState();
  };
  _setEventHandlers = function() {
    if (_settings.trigger instanceof jQuery) {
      return _settings.trigger.on('click', function(event) {
        event.preventDefault();
        return _toggleState();
      });
    } else {
      return _toggleStateViaKey();
    }
  };
  _setInitialState = function() {
    _item = localStorage.getItem(_settings.itemTitle);
    if (_item === null) {
      return _settings.element.removeClass(_settings.hiddenClass);
    } else {
      return _settings.element.addClass(_settings.hiddenClass);
    }
  };
  _toggleState = function() {
    if (!_settings.element.hasClass(_settings.hiddenClass)) {
      _settings.element.addClass(_settings.hiddenClass);
      return _item = localStorage.setItem(_settings.itemTitle, true);
    } else {
      _settings.element.removeClass(_settings.hiddenClass);
      return _item = localStorage.removeItem(_settings.itemTitle);
    }
  };
  _toggleStateViaKey = function() {
    return $(document).on('keyup', function(event) {
      var tag;
      tag = event.target.tagName.toLowerCase();
      switch (event.which) {
        case _settings.trigger:
          if (!(tag === 'input' || tag === 'textarea')) {
            return _toggleState();
          }
      }
    });
  };
  return {
    init: init
  };
})();
