this.Spellbook.Modules.Modal = (function() {
  var $_backdrop, $_modal, _cleanupEvents, _setActiveEventHandlers, _setEventHandlers, _settings, _toggleOverlay, init, trigger;
  $_modal = null;
  $_backdrop = null;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $trigger: $('.js-modal-trigger'),
      $close: $('.js-modal-close'),
      dataAttribute: 'modal',
      backdropClass: 'modal-backdrop',
      activeClass: 'is-active',
      inactiveClass: 'is-inactive',
      activeBodyClass: 'is-modal-active'
    }, options);
    _setEventHandlers();
    return this;
  };
  trigger = function($element, event, removeBackdrop, callback) {
    if (removeBackdrop == null) {
      removeBackdrop = false;
    }
    if (callback == null) {
      callback = null;
    }
    $_modal = $element;
    switch (event) {
      case 'open':
        $element.addClass(_settings.activeClass);
        $('body').addClass(_settings.activeBodyClass);
        break;
      case 'close':
        $element.removeClass(_settings.activeClass);
        $('body').removeClass(_settings.activeBodyClass);
        _cleanupEvents();
    }
    if (!removeBackdrop) {
      _toggleOverlay(event);
    }
    if (callback) {
      callback();
    }
    return _setActiveEventHandlers();
  };
  _toggleOverlay = function(event) {
    switch (event) {
      case 'open':
        $('<div class=' + _settings.backdropClass + '></div>').appendTo($('body'));
        $_backdrop = $("." + _settings.backdropClass);
        return setTimeout(function() {
          return $_backdrop.addClass(_settings.activeClass);
        }, 25);
      case 'close':
        $_backdrop.removeClass(_settings.activeClass);
        return setTimeout(function() {
          return $_backdrop.remove();
        }, 500);
    }
  };
  _setEventHandlers = function() {
    return _settings.$trigger.on('click', function(event) {
      var selector;
      event.preventDefault();
      selector = $(this).data(_settings.dataAttribute);
      $_modal = $(selector);
      return trigger($_modal, 'open');
    });
  };
  _setActiveEventHandlers = function() {
    _settings.$close.on('click', function(event) {
      event.preventDefault();
      return trigger($_modal, 'close');
    });
    $_backdrop.on('click', function(event) {
      return trigger($_modal, 'close');
    });
    return $(document).on('keydown', function(event) {
      switch (event.which) {
        case 27:
          return trigger($_modal, 'close');
      }
    });
  };
  _cleanupEvents = function() {
    _settings.$close.off('click');
    return $(document).off('keydown');
  };
  return {
    init: init,
    trigger: trigger
  };
})();
