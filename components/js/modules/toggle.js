this.Spellbook.Modules.Toggle = (function() {
  var _handleClickEvent, _handleHoverEvent, _handleHoverStateEvent, _setEventHandlers, _settings, _toggleClass, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-toggle'),
      proximity: 'next',
      event: 'click',
      toggleClass: 'is-hidden',
      activeClass: 'is-active',
      initialState: null,
      onClick: null,
      onMouseover: null,
      onMouseout: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    switch (_settings.event) {
      case 'click':
        return _handleClickEvent();
      case 'hover':
        return _handleHoverEvent();
    }
  };
  _handleClickEvent = function() {
    return _settings.$element.on('click', function(event) {
      var $element;
      event.preventDefault();
      $element = $(this);
      if (typeof _settings.onClick === "function") {
        _settings.onClick(_settings);
      }
      _settings.$element.toggleClass(_settings.activeClass);
      switch (_settings.proximity) {
        case 'next':
          return $element.next().toggleClass(_settings.toggleClass);
        case 'prev':
          return $element.prev().toggleClass(_settings.toggleClass);
        case 'nextParent':
          return $element.parent().next().toggleClass(_settings.toggleClass);
        case 'prevParent':
          return $element.parent().prev().toggleClass(_settings.toggleClass);
        default:
          if (typeof _settings.proximity === 'object') {
            return _settings.proximity.toggleClass(_settings.toggleClass);
          } else {
            return $element.find(_settings.proximity).toggleClass(_settings.toggleClass);
          }
      }
    });
  };
  _handleHoverEvent = function() {
    if (_settings.initialState) {
      _settings.initialState(_settings);
    }
    return _settings.$element.on({
      mouseenter: function() {
        return _handleHoverStateEvent($(this), 'on');
      },
      mouseleave: function() {
        return _handleHoverStateEvent($(this), 'off');
      }
    });
  };
  _handleHoverStateEvent = function($element, state) {
    switch (state) {
      case 'on':
        if (typeof _settings.onMouseover === "function") {
          _settings.onMouseover(_settings);
        }
        $element.addClass(_settings.activeClass);
        break;
      case 'off':
        if (typeof _settings.onMouseout === "function") {
          _settings.onMouseout(_settings);
        }
        $element.removeClass(_settings.activeClass);
    }
    switch (_settings.proximity) {
      case 'next':
        return _toggleClass($element.next());
      case 'prev':
        return _toggleClass($element.prev());
      case 'nextParent':
        return _toggleClass($element.parent().next());
      case 'prevParent':
        return _toggleClass($element.parent().prev());
      default:
        if (typeof _settings.proximity === 'object') {
          return _toggleClass(_settings.proximity);
        } else {
          return _toggleClass($element.find(_settings.proximity));
        }
    }
  };
  _toggleClass = function($element, classToToggle) {
    if (classToToggle == null) {
      classToToggle = _settings.toggleClass;
    }
    if ($element.hasClass(classToToggle)) {
      return $element.removeClass(classToToggle);
    } else {
      return $element.addClass(classToToggle);
    }
  };
  return {
    init: init
  };
})();
