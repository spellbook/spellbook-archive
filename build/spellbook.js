this.Spellbook = {};

this.Spellbook.AutoDuplicateInput = (function() {
  var getCount, init, _count, _duplicate, _field, _getValidationType, _isValid, _setEventHandlers, _setInputState, _settings, _validators;
  _settings = {};
  _count = 0;
  _field = null;
  _validators = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-autoDuplicateInput'),
      $container: $('.js-autoDuplicateInput-container'),
      clonedDataAttribute: 'cloned',
      validateDataAttribute: 'validate',
      invalidClass: 'is-invalid',
      validClass: 'is-valid',
      onDuplicate: null,
      onInvalid: null,
      onValid: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      event.preventDefault();
      _field = $(this);
      if (_isValid()) {
        _setInputState('valid');
        if (_settings.onValid != null) {
          _settings.onValid(_settings);
        }
        if (_field.data('cloned') !== 'true') {
          _duplicate();
        }
        if (_settings.onDuplicate != null) {
          return _settings.onDuplicate(_settings, _count);
        }
      } else {
        _setInputState('invalid');
        if (_settings.onInvalid != null) {
          return _settings.onInvalid(_settings);
        }
      }
    });
  };
  _getValidationType = function() {
    return _field.data(_settings.validateDataAttribute);
  };
  _isValid = function() {
    var validator;
    validator = _getValidationType(_field);
    return _validators["" + validator].test(_field.val());
  };
  _duplicate = function() {
    ++_count;
    return _field.data(_settings.clonedDataAttribute, 'true').clone(true).appendTo(_settings.$container).removeClass(_settings.validClass).val('').data(_settings.clonedDataAttribute, '');
  };
  _setInputState = function(type) {
    switch (type) {
      case 'invalid':
        return _field.removeClass(_settings.validClass).addClass(_settings.invalidClass);
      case 'valid':
        return _field.removeClass(_settings.invalidClass).addClass(_settings.validClass);
    }
  };
  getCount = function() {
    return _count;
  };
  return {
    init: init,
    getCount: getCount
  };
})();

this.Spellbook.autoSubmit = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-autoSubmit')
  }, options);
  return settings.$element.on('change', function() {
    return $(this).closest('form').trigger('submit');
  });
};

this.Spellbook.clickOut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-clickout'),
    run: null
  }, options);
  $(document).on('click', function() {
    return settings.run();
  });
  return settings.$element.on('click', function(event) {
    return event.stopPropagation();
  });
};

this.Spellbook.Dematerialize = (function() {
  Dematerialize._settings = {};

  Dematerialize._item = '';

  function Dematerialize(options) {
    this.options = options;
    this._settings = $.extend({
      $element: $('.js-dematerialize'),
      $trigger: $('.js-dematerialize-trigger'),
      itemTitle: 'hidden_element',
      hiddenClass: 'is-hidden'
    }, this.options);
  }

  Dematerialize.prototype.init = function() {
    this._setEventHandlers();
    return this._setInitialState();
  };

  Dematerialize.prototype._setEventHandlers = function() {
    if (this._settings.$trigger instanceof jQuery) {
      return this._settings.$trigger.on('click', (function(_this) {
        return function(event) {
          event.preventDefault();
          return _this._toggleState();
        };
      })(this));
    } else {
      return this._toggleStateViaKey();
    }
  };

  Dematerialize.prototype._setInitialState = function() {
    this._item = localStorage.getItem(this._settings.itemTitle);
    if (this._item !== 'true') {
      return this._settings.$element.removeClass(this._settings.hiddenClass);
    }
  };

  Dematerialize.prototype._toggleState = function() {
    if (!this._settings.$element.hasClass(this._settings.hiddenClass)) {
      this._settings.$element.addClass(this._settings.hiddenClass);
      return this._item = localStorage.setItem(this._settings.itemTitle, 'true');
    } else {
      this._settings.$element.removeClass(this._settings.hiddenClass);
      return this._item = localStorage.removeItem(this._settings.itemTitle);
    }
  };

  Dematerialize.prototype._toggleStateViaKey = function() {
    return $(document).on('keyup', (function(_this) {
      return function(event) {
        var tag;
        tag = event.target.tagName.toLowerCase();
        switch (event.which) {
          case _this._settings.$trigger:
            if (!(tag === 'input' || tag === 'textarea')) {
              return _this._toggleState();
            }
        }
      };
    })(this));
  };

  return Dematerialize;

})();

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.Spellbook.DrawSvg = (function() {
  DrawSvg.prototype._settings = {};

  DrawSvg.prototype._paths = [];

  DrawSvg.prototype._lengths = [];

  DrawSvg.prototype._currentFrame = 0;

  DrawSvg.prototype._totalFrames = 60;

  DrawSvg.prototype._handle = 0;

  DrawSvg.prototype._progress = 0;

  function DrawSvg(options) {
    this.options = options;
    this.draw = __bind(this.draw, this);
    this.init();
  }

  DrawSvg.prototype.init = function() {
    this._settings = $.extend({
      $element: $('.js-drawSvg'),
      prefix: 'path'
    }, this.options);
    return this._setStorage();
  };

  DrawSvg.prototype._setStorage = function() {
    var index, length, numberOfPaths, _i, _results;
    numberOfPaths = this._settings.$element.find('path[id]').length;
    _results = [];
    for (index = _i = 0; 0 <= numberOfPaths ? _i < numberOfPaths : _i > numberOfPaths; index = 0 <= numberOfPaths ? ++_i : --_i) {
      this._paths[index] = document.getElementById("" + this._settings.prefix + "-" + index);
      length = this._paths[index].getTotalLength();
      this._lengths[index] = length;
      this._paths[index].style.strokeDasharray = "" + length + " " + length;
      _results.push(this._paths[index].style.strokeDashoffset = length);
    }
    return _results;
  };

  DrawSvg.prototype._setStroke = function() {
    var index, _i, _ref, _results;
    _results = [];
    for (index = _i = 0, _ref = this._paths.length; 0 <= _ref ? _i < _ref : _i > _ref; index = 0 <= _ref ? ++_i : --_i) {
      _results.push(this._paths[index].style.strokeDashoffset = Math.floor(this._lengths[index] * (1 - this._progress)));
    }
    return _results;
  };

  DrawSvg.prototype.draw = function() {
    this._progress = this._currentFrame / this._totalFrames;
    if (this._progress > 1) {
      return window.cancelAnimationFrame(this._handle);
    } else {
      this._currentFrame++;
      this._setStroke();
      return this._handle = window.requestAnimationFrame(this.draw);
    }
  };

  return DrawSvg;

})();

this.Spellbook.EqualHeights = (function() {
  var init, _heights, _setEventHandlers, _setHeight, _settings, _timer;
  _settings = {};
  _heights = [];
  _timer = null;
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-equalHeights')
    }, options);
    _setHeight();
    return _setEventHandlers();
  };
  _setHeight = function() {
    var height;
    _settings.$element.css('height', 'auto');
    _settings.$element.each(function() {
      return _heights.push($(this).height());
    });
    height = Math.max.apply(Math, _heights);
    return _settings.$element.css('height', height);
  };
  _setEventHandlers = function() {
    return $(window).on('resize', function() {
      clearTimeout(_timer);
      return _timer = setTimeout(_setHeight, 250);
    });
  };
  return {
    init: init
  };
})();

this.Spellbook.escapeOut = function(options) {
  var settings;
  settings = $.extend({
    run: null
  }, options);
  return $(document).on('keyup', function(event) {
    switch (event.which) {
      case 27:
        return settings.run();
    }
  });
};

this.Spellbook.filter = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-filter'),
    $item: $('.js-filter-item'),
    $link: $('.js-filter-link'),
    $empty: $('<p>There are no items to show.</p>'),
    activeClass: 'is-active',
    hiddenClass: 'is-hidden',
    dataAttribute: 'item'
  }, options);
  return settings.$link.on('click', function(event) {
    var $element, dataItemToShow, itemToShow;
    event.preventDefault();
    $element = $(this);
    itemToShow = $element.attr('href').split('#')[1];
    settings.$link.removeClass(settings.activeClass);
    $element.toggleClass(settings.activeClass);
    if (itemToShow !== 'all') {
      settings.$item.addClass(settings.hiddenClass);
      dataItemToShow = $("[data-" + settings.dataAttribute + "=" + itemToShow + "]");
      if (dataItemToShow.length > 0) {
        return dataItemToShow.removeClass(settings.hiddenClass);
      } else {
        return settings.$element.append(settings.$empty);
      }
    } else {
      return settings.$item.removeClass(settings.hiddenClass);
    }
  });
};

this.Spellbook.fixOrphanWords = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-orphan')
  }, options);
  return settings.$element.each(function() {
    var $element, finalTitle, i, wordArray, _i, _ref;
    $element = $(this);
    wordArray = $element.text().split(' ');
    finalTitle = '';
    for (i = _i = 0, _ref = wordArray.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      finalTitle += wordArray[i];
      if (i === (wordArray.length - 2)) {
        finalTitle += '&nbsp;';
      } else if (i === (wordArray.length - 1)) {
        finalTitle += '';
      } else {
        finalTitle += ' ';
      }
    }
    return $element.html(finalTitle);
  });
};

this.Spellbook.HeadingLinks = (function() {
  var init, _addAnchors, _settings, _slugify;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('h1, h2, h3, h4, h5'),
      anchorClass: 'anchor'
    }, options);
    return _addAnchors();
  };
  _slugify = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
  };
  _addAnchors = function() {
    return _settings.$element.each(function() {
      var $element, slug;
      $element = $(this);
      slug = _slugify($element.text());
      $element.attr('id', slug);
      return $element.prepend("<a class='" + _settings.anchorClass + "' href='#" + slug + "'>#</a>");
    });
  };
  return {
    init: init
  };
})();

this.Spellbook.keyCodes = {
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'esc': 27,
  'leftarrow': 37,
  'uparrow': 38,
  'rightarrow': 39,
  'downarrow': 40,
  'comma': 188,
  'slash': 191,
  'backslash': 220,
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  'a': 65,
  'b': 66,
  'c': 67,
  'd': 68,
  'e': 69,
  'f': 70,
  'g': 71,
  'h': 72,
  'i': 73,
  'j': 74,
  'k': 75,
  'l': 76,
  'm': 77,
  'n': 78,
  'o': 79,
  'p': 80,
  'q': 81,
  'r': 82,
  's': 83,
  't': 84,
  'u': 85,
  'v': 86,
  'w': 87,
  'x': 88,
  'y': 89,
  'z': 90
};

this.Spellbook.limiter = function(options) {
  var count, settings;
  settings = $.extend({
    $element: $('.js-limiter-element'),
    $toggle: $('.js-limiter-toggle'),
    hiddenClass: 'is-hidden',
    limit: 5
  }, options);
  count = settings.$element.length;
  if (count > settings.limit) {
    settings.$element.not(":lt(" + settings.limit + ")").addClass(settings.hiddenClass);
    return settings.$toggle.on('click', function(event) {
      event.preventDefault();
      $(this).remove();
      return settings.$element.removeClass(settings.hiddenClass);
    });
  } else {
    return settings.$toggle.remove();
  }
};

this.Spellbook.LiveSearch = (function() {
  var init, _clearEmptyMessage, _handleEmptyResults, _isEmpty, _isQueryAbsent, _parseDom, _query, _setEventHandlers, _settings;
  _settings = {};
  _query = '';
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-search'),
      $query: $('.js-search-query'),
      $container: $('.js-search-container'),
      itemNode: '.js-search-item',
      hiddenClass: 'is-hidden',
      emptyMessage: true,
      emptyNode: '.js-search-empty',
      onClear: null,
      onEmpty: null,
      onFound: null,
      onKeyup: null
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('keyup', function(event) {
      _query = $(this).val();
      if (_settings.onKeyup != null) {
        _settings.onKeyup(_settings);
      }
      if (_query === '') {
        $(_settings.itemNode).removeClass(_settings.hiddenClass);
        _clearEmptyMessage();
        if (_settings.onClear != null) {
          _settings.onClear(_settings);
        }
      }
      _clearEmptyMessage();
      return _parseDom();
    });
  };
  _parseDom = function() {
    _settings.$query.each(function(index) {
      var $element;
      $element = $(this);
      if (_isQueryAbsent($element)) {
        return $element.closest(_settings.itemNode).addClass(_settings.hiddenClass);
      } else {
        $element.closest(_settings.itemNode).removeClass(_settings.hiddenClass);
        if (_settings.onFound != null) {
          return _settings.onFound(_settings);
        }
      }
    });
    return _handleEmptyResults();
  };
  _clearEmptyMessage = function() {
    if (_settings.emptyMessage && $(_settings.emptyNode).length > 0) {
      return $(_settings.emptyNode).remove();
    }
  };
  _handleEmptyResults = function() {
    var emptyClass;
    if (_isEmpty()) {
      if (_settings.emptyMessage) {
        emptyClass = _settings.emptyNode.replace('.', '');
      }
      $("<p class='" + emptyClass + "'>\n  There are no results matching '" + _query + "'.\n</p>").insertAfter(_settings.$container);
      if (_settings.onEmpty != null) {
        return _settings.onEmpty(_settings);
      }
    }
  };
  _isQueryAbsent = function(element) {
    return element.text().search(new RegExp(_query, 'i')) < 0;
  };
  _isEmpty = function() {
    return $("" + _settings.itemNode + "." + _settings.hiddenClass).length === $(_settings.itemNode).length;
  };
  return {
    init: init
  };
})();

this.Spellbook.loader = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-loader-element'),
    $toggle: $('.js-loader-toggle'),
    $spinner: $('<span></span>'),
    $overlay: $('<div></div>'),
    spinnerClass: 'loader',
    overlayClass: 'loader-overlay',
    loadingClass: 'is-loading'
  }, options);
  return settings.$toggle.on('click', function(event) {
    settings.$element.toggleClass(settings.loadingClass);
    settings.$element.append(settings.$spinner);
    settings.$spinner.addClass(settings.spinnerClass);
    settings.$element.append(settings.$overlay);
    return settings.$overlay.addClass(settings.overlayClass);
  });
};

this.Spellbook.Modal = (function() {
  var $_backdrop, $_modal, init, trigger, _cleanupEvents, _setActiveEventHandlers, _setEventHandlers, _settings, _toggleOverlay;
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

this.Spellbook.QuantityInput = (function() {
  var init, _setEventHandlers, _setValue, _settings, _updateTarget, _updateValue, _value;
  _settings = {};
  _value = null;
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-quantityInput'),
      $field: $('.js-quantityInput-field'),
      $increase: $('.js-quantityInput-increase'),
      $decrease: $('.js-quantityInput-decrease'),
      $target: $('.js-quantityInput-target'),
      targetBaseValue: 29,
      targetValuePrefix: '$',
      minValue: 1,
      maxValue: 100,
      onIncrease: null,
      onDecrease: null,
      onTargetUpdate: null
    }, options);
    _setValue();
    return _setEventHandlers();
  };
  _setValue = function() {
    return _value = parseInt(_settings.$element.val());
  };
  _setEventHandlers = function() {
    _settings.$element.on('keyup', function(event) {
      _setValue();
      if (!(isNaN(_value) || _value < _settings.minValue || _value > _settings.maxValue)) {
        return _updateValue();
      }
    });
    _settings.$increase.on('click', function(event) {
      event.preventDefault();
      if (_value !== _settings.maxValue) {
        _updateValue('up');
      }
      if (_settings.onIncrease != null) {
        return _settings.onIncrease(_settings);
      }
    });
    return _settings.$decrease.on('click', function(event) {
      event.preventDefault();
      if (_value !== _settings.minValue) {
        _updateValue('down');
      }
      if (_settings.onDecrease != null) {
        return _settings.onDecrease(_settings);
      }
    });
  };
  _updateValue = function(direction) {
    if (direction == null) {
      direction = '';
    }
    switch (direction) {
      case 'up':
        _settings.$element.val(++_value);
        break;
      case 'down':
        _settings.$element.val(--_value);
        break;
      default:
        _settings.$element.val(_value);
    }
    _updateTarget();
    if (_settings.onTargetUpdate != null) {
      return _settings.onTargetUpdate(_settings);
    }
  };
  _updateTarget = function() {
    var updatedValue;
    updatedValue = _value * _settings.targetBaseValue;
    return _settings.$target.text("" + _settings.targetValuePrefix + updatedValue);
  };
  return {
    init: init
  };
})();

this.Spellbook.QueryParams = (function() {
  QueryParams.prototype.params = {};

  QueryParams.prototype.variables = [];

  QueryParams.prototype._settings = {};

  function QueryParams(options) {
    this.options = options;
    this.init();
  }

  QueryParams.prototype.init = function() {
    this._settings = $.extend({
      url: null
    }, this.options);
    this._parseQueryString(this._settings.url);
    return this._sortParams();
  };

  QueryParams.prototype._parseQueryString = function(url) {
    var queryString;
    if (url) {
      queryString = url.split('?')[1];
    } else {
      queryString = window.location.search.substring(1);
    }
    return this.variables = queryString.split('&');
  };

  QueryParams.prototype._sortParams = function() {
    var pair, param, _i, _len, _ref, _results;
    _ref = this.variables;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      pair = param.split('=');
      if (pair[1] !== void 0) {
        _results.push(this.params[pair[0]] = pair[1]);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  QueryParams.prototype.allParams = function() {
    return this.params;
  };

  QueryParams.prototype.matchParamKey = function(matcher) {
    var key, value, _ref;
    _ref = this.params;
    for (key in _ref) {
      value = _ref[key];
      if (matcher === key) {
        return true;
      }
    }
    return false;
  };

  QueryParams.prototype.matchParamValue = function(matcher) {
    var key, value, _ref;
    _ref = this.params;
    for (key in _ref) {
      value = _ref[key];
      if (matcher === value) {
        return true;
      }
    }
    return false;
  };

  return QueryParams;

})();

this.Spellbook.randomizer = function(collection) {
  var randomNumber;
  randomNumber = Math.floor(Math.random() * collection.length);
  return collection[randomNumber];
};

this.Spellbook.sanitize = function(string) {
  return string.replace(/(<([^>]+)>)/ig, '');
};

this.Spellbook.SaveProgress = (function() {
  var init, _eraseProgress, _restoreProgress, _setEventHandlers, _settings, _storeProgress;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-saveProgress'),
      $container: $('.js-saveProgress-container'),
      dataAttribute: 'saveprogress'
    }, options);
    _restoreProgress();
    return _setEventHandlers();
  };
  _eraseProgress = function(container) {
    return container.find(_settings.$element).each(function() {
      var key;
      key = $(this).data(_settings.dataAttribute);
      return localStorage.removeItem(key);
    });
  };
  _restoreProgress = function() {
    return _settings.$element.each(function() {
      var $element, key, value;
      $element = $(this);
      key = $element.data(_settings.dataAttribute);
      value = localStorage.getItem(key);
      return $element.val(value);
    });
  };
  _setEventHandlers = function() {
    _settings.$element.on('input', function() {
      var $element, key, value;
      $element = $(this);
      key = $element.data(_settings.dataAttribute);
      value = $element.val();
      return _storeProgress(key, value);
    });
    return _settings.$container.on('submit', function(event) {
      return _eraseProgress($(this));
    });
  };
  _storeProgress = function(key, value) {
    return localStorage.setItem(key, value);
  };
  return {
    init: init
  };
})();

this.Spellbook.scrollTo = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-scrollTo'),
    speed: 250
  }, options);
  return settings.$element.on('click', function(event) {
    var to;
    event.preventDefault();
    to = settings.$element.attr('href');
    return $('body, html').animate({
      scrollTop: parseInt($(to).offset().top)
    }, settings.speed);
  });
};

this.Spellbook.scrollTrigger = function(options) {
  var active, scrolled, settings;
  settings = $.extend({
    $element: $('.js-scrollTrigger'),
    scrollPadding: 400,
    activeClass: 'is-active'
  }, options);
  scrolled = $(window).scrollTop();
  if (settings.$element.offset().top >= 0) {
    active = scrolled - settings.$element.offset().top - settings.scrollPadding;
  }
  if (!settings.$element.hasClass(settings.activeClass) && active) {
    return settings.$element.addClass(settings.activeClass);
  }
};

this.Spellbook.selectText = (function() {
  var init, _selectElement, _setEventHandlers, _settings;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-selectText'),
      onClick: null
    }, options);
    return _setEventHandlers();
  };
  _selectElement = function($element) {
    var node, range, selection;
    node = $element[0];
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(node);
      return range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      return selection.addRange(range);
    }
  };
  _setEventHandlers = function() {
    return _settings.$element.on('click', function() {
      _selectElement(_settings.$element);
      $(this).trigger('focus').trigger('select');
      if (_settings.onClick != null) {
        return _settings.onClick(_settings);
      }
    });
  };
  return {
    init: init
  };
})();

this.Spellbook.Share = (function() {
  var init, _setEventHandlers, _settings, _triggerPopup;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-share'),
      popup: {
        height: 400,
        width: 575,
        left: 0,
        top: 0
      }
    }, options);
    return _setEventHandlers();
  };
  _setEventHandlers = function() {
    return _settings.$element.on('click', function(event) {
      var $element, content, service, url;
      event.preventDefault();
      $element = $(this);
      url = $element.attr('href');
      service = $element.data('share-service');
      content = $element.data('share-text');
      return _triggerPopup(service, url, content);
    });
  };
  _triggerPopup = function(service, url, content) {
    var popupOptions;
    popupOptions = "width=" + _settings.popup.width + ", height=" + _settings.popup.height + ", top=" + _settings.popup.top + ", left=" + _settings.popup.left;
    switch (service) {
      case 'twitter':
        url = "https://twitter.com/share?text=" + content + "&url=" + url;
        break;
      case 'facebook':
        url = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        service = 'facebook-share-dialog';
        break;
      case 'google':
        url = "https://plus.google.com/share?url=" + url;
    }
    return window.open(url, service, popupOptions);
  };
  return {
    init: init
  };
})();

this.Spellbook.shortcut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('[data-shortcut]'),
    dataAttribute: 'shortcut',
    keyCodes: Spellbook.keyCodes
  }, options);
  return settings.$element.each(function() {
    var key;
    key = settings.keyCodes[$(this).data(settings.dataAttribute)];
    return $(document).on('keyup', (function(_this) {
      return function(event) {
        var $element, tag;
        $element = $(_this);
        tag = event.target.tagName.toLowerCase();
        if (!(tag === 'input' || tag === 'textarea')) {
          if (event.which === key) {
            $element.trigger('focus').trigger('click');
            if ($element.prop('tagName').toLowerCase() === 'a') {
              return window.location = $element.attr('href');
            }
          }
        }
      };
    })(this));
  });
};

this.Spellbook.ShowPassword = (function() {
  var init, _setEventHandlers, _settings, _showPassword;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $input: $('.js-showPassword-input'),
      $toggle: $('.js-showPassword-toggle'),
      showByDefault: false
    }, options);
    _setEventHandlers();
    if (_settings.showByDefault) {
      return _showPassword();
    }
  };
  _setEventHandlers = function() {
    return _settings.$toggle.on('change', function(event) {
      var show;
      show = $(this).prop('checked');
      if (show) {
        return _showPassword();
      } else {
        return _settings.$input.attr('type', 'password');
      }
    });
  };
  _showPassword = function() {
    _settings.$input.attr('type', 'text');
    return _settings.$toggle.prop('checked', true);
  };
  return {
    init: init
  };
})();

this.Spellbook.slugify = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
};

this.Spellbook.StateUrls = (function() {
  var init, _getCurrentState, _sanitizeHash, _setEventHandlers, _setInitialState, _settings, _showSection;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      $element: $('.js-stateUrls'),
      $link: $('.js-stateUrls-link'),
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
      state = _settings.$link.first().attr('href');
    }
    return state;
  };
  _setInitialState = function(state) {
    _settings.$element.not(state).addClass(_settings.hiddenClass);
    return $("[data-" + _settings.dataAttribute + "=" + state + "]").removeClass(_settings.hiddenClass).addClass(_settings.activeClass);
  };
  _setEventHandlers = function() {
    return _settings.$link.on('click', function(event) {
      var $element, state;
      event.preventDefault();
      $element = $(this);
      state = $element.attr('href');
      if (history.pushState) {
        history.pushState(null, null, state);
      } else {
        window.location.hash = state;
      }
      if ($(state).length > 0) {
        return _showSection($element, state);
      }
    });
  };
  _showSection = function($element, state) {
    _settings.$link.removeClass(_settings.activeClass);
    _settings.$element.addClass(_settings.hiddenClass);
    $element.addClass(_settings.activeClass);
    return $(state).removeClass(_settings.hiddenClass);
  };
  return {
    init: init
  };
})();

this.Spellbook.toggle = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-toggle'),
    proximity: 'next',
    event: 'click',
    toggleClass: 'is-hidden',
    activeClass: 'is-active',
    onClick: null,
    onMouseover: null,
    onMouseout: null
  }, options);
  switch (settings.event) {
    case 'click':
      return settings.$element.on('click', function(event) {
        var $element;
        event.preventDefault();
        $element = $(this);
        if (settings.onClick != null) {
          settings.onClick(settings);
        }
        settings.$element.toggleClass(settings.activeClass);
        switch (settings.proximity) {
          case 'next':
            return $element.next().toggleClass(settings.toggleClass);
          case 'prev':
            return $element.prev().toggleClass(settings.toggleClass);
          case 'nextParent':
            return $element.parent().next().toggleClass(settings.toggleClass);
          case 'prevParent':
            return $element.parent().prev().toggleClass(settings.toggleClass);
          default:
            return settings.proximity.toggleClass(settings.toggleClass);
        }
      });
    case 'hover':
      if (settings.initialState) {
        settings.initialState();
      }
      return settings.$element.on({
        mouseenter: function() {
          var $element;
          $element = $(this);
          if (settings.onMouseover != null) {
            settings.onMouseover(settings);
          }
          $element.addClass(settings.activeClass);
          switch (settings.proximity) {
            case 'next':
              return $element.next().addClass(settings.toggleClass);
            case 'prev':
              return $element.prev().addClass(settings.toggleClass);
            case 'nextParent':
              return $element.parent().next().addClass(settings.toggleClass);
            case 'prevParent':
              return $element.parent().prev().addClass(settings.toggleClass);
            default:
              return settings.proximity.addClass(settings.toggleClass);
          }
        },
        mouseleave: function() {
          var $element;
          $element = $(this);
          if (settings.onMouseout != null) {
            settings.onMouseout(settings);
          }
          $element.removeClass(settings.activeClass);
          switch (settings.proximity) {
            case 'next':
              return $element.next().removeClass(settings.toggleClass);
            case 'prev':
              return $element.prev().removeClass(settings.toggleClass);
            case 'nextParent':
              return $element.parent().next().removeClass(settings.toggleClass);
            case 'prevParent':
              return $element.parent().prev().removeClass(settings.toggleClass);
            default:
              return settings.proximity.removeClass(settings.toggleClass);
          }
        }
      });
  }
};

this.Spellbook.uid = function(length) {
  var id;
  if (length == null) {
    length = 10;
  }
  id = '';
  while (id.length < length) {
    id += Math.random().toString(36).substr(2);
  }
  return id.substr(0, length);
};