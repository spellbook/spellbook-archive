this.Spellbook = {};

this.Spellbook.Globals = {};

this.Spellbook.Classes = {};

this.Spellbook.Helpers = {};

this.Spellbook.Services = {};

this.Spellbook.Inbox = {};

this.Spellbook.Classes.Base = (function() {
  Base.prototype._settings = {};

  function Base(options) {
    this.options = options;
    if (typeof this.init === "function") {
      this.init();
    }
  }

  Base.prototype._setDefaults = function(defaults) {
    return this._settings = $.extend(defaults, this.options);
  };

  return Base;

})();

this.Spellbook.Classes.Singleton = (function() {
  function Singleton() {}

  Singleton.prototype._instance = null;

  Singleton.getInstance = function() {
    return this._instance != null ? this._instance : this._instance = (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(this, arguments, function(){});
  };

  return Singleton;

})();

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.AutoDuplicateInput = (function(superClass) {
  extend(AutoDuplicateInput, superClass);

  function AutoDuplicateInput() {
    return AutoDuplicateInput.__super__.constructor.apply(this, arguments);
  }

  AutoDuplicateInput.prototype._count = 0;

  AutoDuplicateInput.prototype._field = null;

  AutoDuplicateInput.prototype._validators = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

  AutoDuplicateInput.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-autoDuplicateInput'),
      $container: $('.js-autoDuplicateInput-container'),
      clonedDataAttribute: 'cloned',
      validateDataAttribute: 'validate',
      invalidClass: 'is-invalid',
      validClass: 'is-valid',
      onDuplicate: null,
      onInvalid: null,
      onValid: null
    });
    return this._setEventHandlers();
  };

  AutoDuplicateInput.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var base, base1, base2;
        event.preventDefault();
        _this._field = $(event.currentTarget);
        if (_this._isValid()) {
          _this._setInputState('valid');
          if (typeof (base = _this._settings).onValid === "function") {
            base.onValid(_this._settings);
          }
          if (_this._field.data('cloned') !== 'true') {
            _this._duplicate();
          }
          return typeof (base1 = _this._settings).onDuplicate === "function" ? base1.onDuplicate(_this._settings, _this._count) : void 0;
        } else {
          _this._setInputState('invalid');
          return typeof (base2 = _this._settings).onInvalid === "function" ? base2.onInvalid(_this._settings) : void 0;
        }
      };
    })(this));
  };

  AutoDuplicateInput.prototype._getValidationType = function() {
    return this._field.data(this._settings.validateDataAttribute);
  };

  AutoDuplicateInput.prototype._isValid = function() {
    var validator;
    validator = this._getValidationType(this._field);
    return this._validators["" + validator].test(this._field.val());
  };

  AutoDuplicateInput.prototype._duplicate = function() {
    ++this._count;
    return this._field.data(this._settings.clonedDataAttribute, 'true').clone(true).appendTo(this._settings.$container).removeClass(this._settings.validClass).val('').data(this._settings.clonedDataAttribute, '');
  };

  AutoDuplicateInput.prototype._setInputState = function(type) {
    switch (type) {
      case 'invalid':
        return this._field.removeClass(this._settings.validClass).addClass(this._settings.invalidClass);
      case 'valid':
        return this._field.removeClass(this._settings.invalidClass).addClass(this._settings.validClass);
    }
  };

  AutoDuplicateInput.prototype.getCount = function() {
    return this._count;
  };

  return AutoDuplicateInput;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.CharacterCounter = (function(superClass) {
  extend(CharacterCounter, superClass);

  function CharacterCounter() {
    return CharacterCounter.__super__.constructor.apply(this, arguments);
  }

  CharacterCounter.prototype._count = 0;

  CharacterCounter.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-characterCounter'),
      $label: $('.js-characterCounter-label'),
      $number: $('.js-characterCounter-number'),
      errorClass: 'is-error',
      successClass: 'is-success',
      minChars: 0,
      maxChars: 140,
      onMinPreceeded: null,
      onMaxExceeded: null,
      onConditionsMet: null
    });
    return this._setEventHandlers();
  };

  CharacterCounter.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var $element, base, base1, base2;
        event.preventDefault();
        $element = $(event.currentTarget);
        _this._count = $element.val().length;
        _this._settings.$number.text(_this._count);
        if (_this._count > _this._settings.maxChars) {
          _this._toggleState($element, 'error');
          return typeof (base = _this._settings).onMaxExceeded === "function" ? base.onMaxExceeded(_this._settings) : void 0;
        } else if (_this._count < _this._settings.minChars) {
          _this._toggleState($element, 'error');
          return typeof (base1 = _this._settings).onMinPreceeded === "function" ? base1.onMinPreceeded(_this._settings) : void 0;
        } else {
          _this._toggleState($element, 'success');
          return typeof (base2 = _this._settings).onConditionsMet === "function" ? base2.onConditionsMet(_this._settings) : void 0;
        }
      };
    })(this));
  };

  CharacterCounter.prototype._toggleState = function(element, state) {
    switch (state) {
      case 'error':
        element.removeClass(this._settings.successClass);
        this._settings.$label.removeClass(this._settings.successClass);
        element.addClass(this._settings.errorClass);
        return this._settings.$label.addClass(this._settings.errorClass);
      case 'success':
        element.removeClass(this._settings.errorClass);
        this._settings.$label.removeClass(this._settings.errorClass);
        element.addClass(this._settings.successClass);
        return this._settings.$label.addClass(this._settings.successClass);
    }
  };

  return CharacterCounter;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Dematerialize = (function(superClass) {
  extend(Dematerialize, superClass);

  function Dematerialize() {
    return Dematerialize.__super__.constructor.apply(this, arguments);
  }

  Dematerialize.prototype._item = '';

  Dematerialize.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-dematerialize'),
      $trigger: $('.js-dematerialize-trigger'),
      itemTitle: 'hidden_element',
      hiddenClass: 'is-hidden'
    });
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

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Dispatcher = (function(superClass) {
  extend(Dispatcher, superClass);

  function Dispatcher() {
    return Dispatcher.__super__.constructor.apply(this, arguments);
  }

  Dispatcher.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-dispatcher'),
      dataAttr: 'dispatcher-page',
      events: []
    });
    return this.dispatch();
  };

  Dispatcher.prototype.dispatch = function(event) {
    var i, len, page, ref, results;
    if (event == null) {
      event = null;
    }
    page = this._getCurrentPage();
    if (!page) {
      return false;
    }
    if (event == null) {
      ref = this._settings.events;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        event = ref[i];
        switch (event.page) {
          case page:
            event.run();
            break;
          case 'all':
            event.run();
        }
        if (event.match) {
          if (page.match(event.match)) {
            results.push(event.run());
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    } else {
      switch (event.page) {
        case page:
          return event.run();
        case 'all':
          return event.run();
      }
    }
  };

  Dispatcher.prototype._getCurrentPage = function() {
    return this._settings.$element.data(this._settings.dataAttr);
  };

  return Dispatcher;

})(Spellbook.Classes.Base);

var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.DrawSvg = (function(superClass) {
  extend(DrawSvg, superClass);

  function DrawSvg() {
    this.draw = bind(this.draw, this);
    return DrawSvg.__super__.constructor.apply(this, arguments);
  }

  DrawSvg.prototype._paths = [];

  DrawSvg.prototype._lengths = [];

  DrawSvg.prototype._currentFrame = 0;

  DrawSvg.prototype._totalFrames = 60;

  DrawSvg.prototype._handle = 0;

  DrawSvg.prototype._progress = 0;

  DrawSvg.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-drawSvg'),
      prefix: 'path'
    });
    return this._setStorage();
  };

  DrawSvg.prototype._setStorage = function() {
    var i, index, length, numberOfPaths, ref, results;
    numberOfPaths = this._settings.$element.find('path[id]').length;
    results = [];
    for (index = i = 0, ref = numberOfPaths; 0 <= ref ? i < ref : i > ref; index = 0 <= ref ? ++i : --i) {
      this._paths[index] = document.getElementById(this._settings.prefix + "-" + index);
      length = this._paths[index].getTotalLength();
      this._lengths[index] = length;
      this._paths[index].style.strokeDasharray = length + " " + length;
      results.push(this._paths[index].style.strokeDashoffset = length);
    }
    return results;
  };

  DrawSvg.prototype._setStroke = function() {
    var i, index, ref, results;
    results = [];
    for (index = i = 0, ref = this._paths.length; 0 <= ref ? i < ref : i > ref; index = 0 <= ref ? ++i : --i) {
      results.push(this._paths[index].style.strokeDashoffset = Math.floor(this._lengths[index] * (1 - this._progress)));
    }
    return results;
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

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.EqualHeights = (function(superClass) {
  extend(EqualHeights, superClass);

  function EqualHeights() {
    return EqualHeights.__super__.constructor.apply(this, arguments);
  }

  EqualHeights.prototype._heights = [];

  EqualHeights.prototype._timer = null;

  EqualHeights.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-equalHeights')
    });
    this._setHeight();
    return this._setEventHandlers();
  };

  EqualHeights.prototype._setHeight = function() {
    var height;
    this._settings.$element.css('height', 'auto');
    this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        return _this._heights.push($(elementNode).height());
      };
    })(this));
    height = Math.max.apply(Math, this._heights);
    return this._settings.$element.css('height', height);
  };

  EqualHeights.prototype._setEventHandlers = function() {
    return $(window).on('resize', (function(_this) {
      return function() {
        clearTimeout(_this._timer);
        return _this._timer = setTimeout(_this._setHeight, 250);
      };
    })(this));
  };

  return EqualHeights;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.FormValidator = (function(superClass) {
  extend(FormValidator, superClass);

  function FormValidator() {
    return FormValidator.__super__.constructor.apply(this, arguments);
  }

  FormValidator.prototype._input = null;

  FormValidator.prototype._errors = [];

  FormValidator.prototype._validators = ['required'];

  FormValidator.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-formValidator'),
      $input: $('.js-formValidator-input'),
      $submit: $('.js-formValidator-submit'),
      messageClass: 'js-formValidator-message',
      errorClass: 'is-invalid',
      delimiter: '|',
      dataAttr: 'validate',
      showMessage: true,
      onError: null,
      onSuccess: null
    });
    return this._setEventHandlers();
  };

  FormValidator.prototype._setEventHandlers = function() {
    this._settings.$element.on('submit', (function(_this) {
      return function(event) {
        if (!_this._validateAllFields()) {
          return event.preventDefault();
        }
      };
    })(this));
    return this._settings.$input.on('keyup', (function(_this) {
      return function(event) {
        _this._input = $(event.currentTarget);
        return _this.validate(_this._input);
      };
    })(this));
  };

  FormValidator.prototype._validateAllFields = function() {
    this._settings.$input.each((function(_this) {
      return function(index, element) {
        _this._input = $(element);
        return _this.validate(_this._input);
      };
    })(this));
    if (this._errors.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  FormValidator.prototype.validate = function(input) {
    var i, key, len, parameter, results;
    parameter = this._parseValidators(input.data(this._settings.dataAttr));
    this._element = input;
    if (Array.isArray(parameter)) {
      results = [];
      for (i = 0, len = parameter.length; i < len; i++) {
        key = parameter[i];
        results.push(this._matchValidators(key));
      }
      return results;
    } else {
      return this._matchValidators(parameter);
    }
  };

  FormValidator.prototype._matchValidators = function(match) {
    switch (match) {
      case 'required':
        if (this._validateRequired()) {
          return this._setValidationState('error', 'The field is required.');
        } else {
          return this._setValidationState('success');
        }
    }
  };

  FormValidator.prototype._setValidationState = function(state, message) {
    var base, base1;
    switch (state) {
      case 'error':
        this._setError(message);
        this._setInputState(message);
        return typeof (base = this._settings).onError === "function" ? base.onError(this._settings) : void 0;
      case 'success':
        this._removeError();
        this._removeInputState();
        return typeof (base1 = this._settings).onSuccess === "function" ? base1.onSuccess(this._settings) : void 0;
    }
  };

  FormValidator.prototype._parseValidators = function(parameter) {
    var i, len, param, parameters, split;
    parameters = [];
    split = parameter.split(this._settings.delimiter);
    if (split.length > 1) {
      for (i = 0, len = split.length; i < len; i++) {
        param = split[i];
        parameters.push(param);
      }
      return parameters;
    } else {
      return parameter;
    }
  };

  FormValidator.prototype._isValidator = function(parameter) {
    return this._validators.indexOf(parameter) !== -1;
  };

  FormValidator.prototype._validateRequired = function() {
    if (this._input.val() === '') {
      return true;
    } else {
      return false;
    }
  };

  FormValidator.prototype._setError = function(message) {
    return this._errors.push({
      element: this._input.attr('name'),
      message: message
    });
  };

  FormValidator.prototype._removeError = function() {
    var index;
    index = this._errors.indexOf(this._input);
    return this._errors.splice(index, 1);
  };

  FormValidator.prototype._setInputState = function(message) {
    this._removeInputState();
    this._input.addClass(this._settings.errorClass);
    if (this._settings.showMessage) {
      return this._input.after("<p class='" + this._settings.messageClass + "'>" + message + "</p>");
    }
  };

  FormValidator.prototype._removeInputState = function() {
    this._input.removeClass(this._settings.errorClass);
    if (this._settings.showMessage) {
      return this._input.next("." + this._settings.messageClass).remove();
    }
  };

  return FormValidator;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.HeadingLinks = (function(superClass) {
  extend(HeadingLinks, superClass);

  function HeadingLinks() {
    return HeadingLinks.__super__.constructor.apply(this, arguments);
  }

  HeadingLinks.prototype.init = function() {
    this._setDefaults({
      $element: $('h1, h2, h3, h4, h5'),
      anchorClass: 'anchor'
    });
    return this._addAnchors();
  };

  HeadingLinks.prototype._slugify = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
  };

  HeadingLinks.prototype._addAnchors = function() {
    return this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        var $element, slug;
        $element = $(elementNode);
        slug = _this._slugify($element.text());
        $element.attr('id', slug);
        return $element.prepend("<a class='" + _this._settings.anchorClass + "' href='#" + slug + "'>#</a>");
      };
    })(this));
  };

  return HeadingLinks;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.KeyboardEvents = (function(superClass) {
  extend(KeyboardEvents, superClass);

  function KeyboardEvents() {
    return KeyboardEvents.__super__.constructor.apply(this, arguments);
  }

  KeyboardEvents.prototype.init = function() {
    this._setDefaults({
      events: []
    });
    return this.emit();
  };

  KeyboardEvents.prototype._match = function(event) {
    return $(document).on('keyup', (function(_this) {
      return function(e) {
        switch (_this._getKeyCode(e)) {
          case event.key:
            return event.run();
        }
      };
    })(this));
  };

  KeyboardEvents.prototype._getKeyCode = function(event) {
    var charCode;
    event = event || window.event;
    charCode = event.keyCode || event.which;
    return charCode;
  };

  KeyboardEvents.prototype.emit = function(event) {
    var i, len, ref, results;
    if (event == null) {
      event = null;
    }
    if (event == null) {
      ref = this._settings.events;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        event = ref[i];
        results.push(this._match(event));
      }
      return results;
    } else {
      return this._match(event);
    }
  };

  return KeyboardEvents;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.LiveSearch = (function(superClass) {
  extend(LiveSearch, superClass);

  function LiveSearch() {
    return LiveSearch.__super__.constructor.apply(this, arguments);
  }

  LiveSearch.prototype._query = '';

  LiveSearch.prototype.init = function() {
    this._setDefaults({
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
    });
    return this._setEventHandlers();
  };

  LiveSearch.prototype._setEventHandlers = function() {
    return this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        var base, base1;
        _this._query = $(event.currentTarget).val();
        if (typeof (base = _this._settings).onKeyup === "function") {
          base.onKeyup(_this._settings);
        }
        if (_this._query === '') {
          $(_this._settings.itemNode).removeClass(_this._settings.hiddenClass);
          _this._clearEmptyMessage();
          if (typeof (base1 = _this._settings).onClear === "function") {
            base1.onClear(_this._settings);
          }
        }
        _this._clearEmptyMessage();
        return _this._parseDom();
      };
    })(this));
  };

  LiveSearch.prototype._parseDom = function() {
    this._settings.$query.each((function(_this) {
      return function(index, elementNode) {
        var $element, base;
        $element = $(elementNode);
        if (_this._isQueryAbsent($element)) {
          return $element.closest(_this._settings.itemNode).addClass(_this._settings.hiddenClass);
        } else {
          $element.closest(_this._settings.itemNode).removeClass(_this._settings.hiddenClass);
          return typeof (base = _this._settings).onFound === "function" ? base.onFound(_this._settings) : void 0;
        }
      };
    })(this));
    return this._handleEmptyResults();
  };

  LiveSearch.prototype._clearEmptyMessages = function() {
    if (this._settings.emptyMessage && $(this._settings.emptyNode).length > 0) {
      return $(this._settings.emptyNode).remove();
    }
  };

  LiveSearch.prototype._handleEmptyResults = function() {
    var base, emptyClass;
    if (this._isEmpty()) {
      if (this._settings.emptyMessage) {
        emptyClass = this._settings.emptyNode.replace('.', '');
      }
      $("<p class='" + emptyClass + "'>\n  There are no results matching '" + this._query + "'.\n</p>").insertAfter(this._settings.$container);
      return typeof (base = this._settings).onEmpty === "function" ? base.onEmpty(this._settings) : void 0;
    }
  };

  LiveSearch.prototype._isQueryAbsent = function(element) {
    return element.text().search(new RegExp(this._query, 'i')) < 0;
  };

  LiveSearch.prototype._isEmpty = function() {
    return $(this._settings.itemNode + "." + this._settings.hiddenClass).length === $(this._settings.itemNode).length;
  };

  return LiveSearch;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Modal = (function(superClass) {
  extend(Modal, superClass);

  function Modal() {
    return Modal.__super__.constructor.apply(this, arguments);
  }

  Modal.prototype._$modal = null;

  Modal.prototype._$backdrop = null;

  Modal.prototype.init = function() {
    this._setDefaults({
      $trigger: $('.js-modal-trigger'),
      $close: $('.js-modal-close'),
      dataAttribute: 'modal',
      backdropClass: 'modal-backdrop',
      activeClass: 'is-active',
      inactiveClass: 'is-inactive',
      activeBodyClass: 'is-modal-active'
    });
    return this._setEventHandlers();
  };

  Modal.prototype.trigger = function($element, event, removeBackdrop, callback) {
    if (removeBackdrop == null) {
      removeBackdrop = false;
    }
    if (callback == null) {
      callback = null;
    }
    this._$modal = $element;
    switch (event) {
      case 'open':
        $element.addClass(this._settings.activeClass);
        $('body').addClass(this._settings.activeBodyClass);
        break;
      case 'close':
        $element.removeClass(this._settings.activeClass);
        $('body').removeClass(this._settings.activeBodyClass);
        this._cleanupEvents();
    }
    if (!removeBackdrop) {
      this._toggleOverlay(event);
    }
    if (typeof callback === "function") {
      callback();
    }
    return this._setActiveEventHandlers();
  };

  Modal.prototype._toggleOverlay = function(event) {
    switch (event) {
      case 'open':
        $('<div class=' + this._settings.backdropClass + '></div>').appendTo($('body'));
        this._$backdrop = $("." + this._settings.backdropClass);
        return setTimeout((function(_this) {
          return function() {
            return _this._$backdrop.addClass(_this._settings.activeClass);
          };
        })(this), 25);
      case 'close':
        this._$backdrop.removeClass(this._settings.activeClass);
        return setTimeout((function(_this) {
          return function() {
            return _this._$backdrop.remove();
          };
        })(this), 500);
    }
  };

  Modal.prototype._setEventHandlers = function() {
    return this._settings.$trigger.on('click', (function(_this) {
      return function(event) {
        var selector;
        event.preventDefault();
        selector = $(event.currentTarget).data(_this._settings.dataAttribute);
        _this._$modal = $(selector);
        return _this.trigger(_this._$modal, 'open');
      };
    })(this));
  };

  Modal.prototype._setActiveEventHandlers = function() {
    this._settings.$close.on('click', (function(_this) {
      return function(event) {
        event.preventDefault();
        return _this.trigger(_this._$modal, 'close');
      };
    })(this));
    this._$backdrop.on('click', (function(_this) {
      return function(event) {
        return _this.trigger(_this._$modal, 'close');
      };
    })(this));
    return $(document).on('keydown', (function(_this) {
      return function(event) {
        switch (event.which) {
          case 27:
            return _this.trigger(_this._$modal, 'close');
        }
      };
    })(this));
  };

  Modal.prototype._cleanupEvents = function() {
    this._settings.$close.off('click');
    return $(document).off('keydown');
  };

  return Modal;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.QuantityInput = (function(superClass) {
  extend(QuantityInput, superClass);

  function QuantityInput() {
    return QuantityInput.__super__.constructor.apply(this, arguments);
  }

  QuantityInput.prototype._value = null;

  QuantityInput.prototype.init = function() {
    this._setDefaults({
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
    });
    this._setValue();
    return this._setEventHandlers();
  };

  QuantityInput.prototype._setValue = function() {
    return this._value = parseInt(this._settings.$element.val());
  };

  QuantityInput.prototype._setEventHandlers = function() {
    this._settings.$element.on('keyup', (function(_this) {
      return function(event) {
        _this._setValue();
        if (!(isNaN(_this._value) || _this._value < _this._settings.minValue || _this._value > _this._settings.maxValue)) {
          return _this._updateValue();
        }
      };
    })(this));
    this._settings.$increase.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value >= _this._settings.maxValue)) {
          _this._updateValue('up');
        }
        return typeof (base = _this._settings).onIncrease === "function" ? base.onIncrease(_this._settings) : void 0;
      };
    })(this));
    return this._settings.$decrease.on('click', (function(_this) {
      return function(event) {
        var base;
        event.preventDefault();
        if (!(_this._value <= _this._settings.minValue)) {
          _this._updateValue('down');
        }
        return typeof (base = _this._settings).onDecrease === "function" ? base.onDecrease(_this._settings) : void 0;
      };
    })(this));
  };

  QuantityInput.prototype._updateValue = function(direction) {
    var base;
    if (direction == null) {
      direction = '';
    }
    switch (direction) {
      case 'up':
        this._settings.$element.val(++this._value);
        break;
      case 'down':
        this._settings.$element.val(--this._value);
        break;
      default:
        this._settings.$element.val(this._value);
    }
    this._updateTarget();
    return typeof (base = this._settings).onTargetUpdate === "function" ? base.onTargetUpdate(this._settings) : void 0;
  };

  QuantityInput.prototype._updateTarget = function() {
    var updatedValue;
    updatedValue = this._value * this._settings.targetBaseValue;
    return this._settings.$target.text("" + this._settings.targetValuePrefix + updatedValue);
  };

  return QuantityInput;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.QueryParams = (function(superClass) {
  extend(QueryParams, superClass);

  function QueryParams() {
    return QueryParams.__super__.constructor.apply(this, arguments);
  }

  QueryParams.prototype.params = {};

  QueryParams.prototype.variables = [];

  QueryParams.prototype.init = function() {
    this._setDefaults({
      url: null
    });
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
    var i, len, pair, param, ref, results;
    ref = this.variables;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      param = ref[i];
      pair = param.split('=');
      if (pair[1] !== void 0) {
        results.push(this.params[pair[0]] = pair[1]);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  QueryParams.prototype.allParams = function() {
    return this.params;
  };

  QueryParams.prototype.matchParamKey = function(matcher) {
    var key, ref, value;
    ref = this.params;
    for (key in ref) {
      value = ref[key];
      if (matcher === key) {
        return true;
      }
    }
    return false;
  };

  QueryParams.prototype.matchParamValue = function(matcher) {
    var key, ref, value;
    ref = this.params;
    for (key in ref) {
      value = ref[key];
      if (matcher === value) {
        return true;
      }
    }
    return false;
  };

  return QueryParams;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.SaveProgress = (function(superClass) {
  extend(SaveProgress, superClass);

  function SaveProgress() {
    return SaveProgress.__super__.constructor.apply(this, arguments);
  }

  SaveProgress.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-saveProgress'),
      $container: $('.js-saveProgress-container'),
      dataAttribute: 'saveprogress'
    });
    this._restoreProgress();
    return this._setEventHandlers();
  };

  SaveProgress.prototype._eraseProgress = function(container) {
    return container.find(this._settings.$element).each((function(_this) {
      return function(index, elementNode) {
        var key;
        key = $(elementNode).data(_this._settings.dataAttribute);
        return localStorage.removeItem(key);
      };
    })(this));
  };

  SaveProgress.prototype._restoreProgress = function() {
    return this._settings.$element.each((function(_this) {
      return function(index, elementNode) {
        var $element, key, value;
        $element = $(elementNode);
        key = $element.data(_this._settings.dataAttribute);
        value = localStorage.getItem(key);
        if (value !== null) {
          return $element.val(value);
        }
      };
    })(this));
  };

  SaveProgress.prototype._setEventHandlers = function() {
    this._settings.$element.on('input', (function(_this) {
      return function(event) {
        var $element, key, value;
        $element = $(event.currentTarget);
        key = $element.data(_this._settings.dataAttribute);
        value = $element.val();
        return _this._storeProgress(key, value);
      };
    })(this));
    return this._settings.$container.on('submit', (function(_this) {
      return function(event) {
        return _this._eraseProgress($(event.currentTarget));
      };
    })(this));
  };

  SaveProgress.prototype._storeProgress = function(key, value) {
    return localStorage.setItem(key, value);
  };

  return SaveProgress;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.SelectText = (function(superClass) {
  extend(SelectText, superClass);

  function SelectText() {
    return SelectText.__super__.constructor.apply(this, arguments);
  }

  SelectText.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-selectText'),
      onClick: null
    });
    return this._setEventHandlers();
  };

  SelectText.prototype._selectElement = function($element) {
    var elementNode, range, selection;
    elementNode = $element[0];
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(elementNode);
      return range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(elementNode);
      selection.removeAllRanges();
      return selection.addRange(range);
    }
  };

  SelectText.prototype._setEventHandlers = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var base;
        _this._selectElement(_this._settings.$element);
        $(event).trigger('focus').trigger('select');
        return typeof (base = _this._settings).onClick === "function" ? base.onClick(_this._settings) : void 0;
      };
    })(this));
  };

  return SelectText;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Share = (function(superClass) {
  extend(Share, superClass);

  function Share() {
    return Share.__super__.constructor.apply(this, arguments);
  }

  Share.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-share'),
      popup: {
        height: 400,
        width: 575,
        left: 0,
        top: 0
      }
    });
    return this._setEventHandlers();
  };

  Share.prototype._setEventHandlers = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var $element, content, service, url;
        event.preventDefault();
        $element = $(event.currentTarget);
        url = $element.attr('href');
        service = $element.data('share-service');
        content = $element.data('share-text');
        return _this._triggerPopup(service, url, content);
      };
    })(this));
  };

  Share.prototype._triggerPopup = function(service, url, content) {
    var popupOptions;
    popupOptions = "width=" + this._settings.popup.width + ", height=" + this._settings.popup.height + ", top=" + this._settings.popup.top + ", left=" + this._settings.popup.left;
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

  return Share;

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.ShowPassword = (function(superClass) {
  extend(ShowPassword, superClass);

  function ShowPassword() {
    return ShowPassword.__super__.constructor.apply(this, arguments);
  }

  ShowPassword.prototype.init = function() {
    this._setDefaults({
      $input: $('.js-showPassword-input'),
      $toggle: $('.js-showPassword-toggle'),
      showByDefault: false
    });
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
      hiddenClass: 'is-hidden',
      activeClass: 'is-active',
      dataAttribute: 'state'
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

})(Spellbook.Classes.Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Toggle = (function(superClass) {
  extend(Toggle, superClass);

  function Toggle() {
    return Toggle.__super__.constructor.apply(this, arguments);
  }

  Toggle.prototype.init = function() {
    this._setDefaults({
      $element: $('.js-toggle'),
      proximity: 'next',
      event: 'click',
      toggleClass: 'is-hidden',
      activeClass: 'is-active',
      initialState: null,
      onClick: null,
      onMouseover: null,
      onMouseout: null
    });
    return this._setEventHandlers();
  };

  Toggle.prototype._setEventHandlers = function() {
    switch (this._settings.event) {
      case 'click':
        return this._handleClickEvent();
      case 'hover':
        return this._handleHoverEvent();
    }
  };

  Toggle.prototype._handleClickEvent = function() {
    return this._settings.$element.on('click', (function(_this) {
      return function(event) {
        var $element, base;
        event.preventDefault();
        $element = $(event.currentTarget);
        if (typeof (base = _this._settings).onClick === "function") {
          base.onClick(_this._settings);
        }
        _this._settings.$element.toggleClass(_this._settings.activeClass);
        switch (_this._settings.proximity) {
          case 'next':
            return $element.next().toggleClass(_this._settings.toggleClass);
          case 'prev':
            return $element.prev().toggleClass(_this._settings.toggleClass);
          case 'nextParent':
            return $element.parent().next().toggleClass(_this._settings.toggleClass);
          case 'prevParent':
            return $element.parent().prev().toggleClass(_this._settings.toggleClass);
          default:
            if (typeof _this._settings.proximity === 'object') {
              return _this._settings.proximity.toggleClass(_this._settings.toggleClass);
            } else {
              return $element.find(_this._settings.proximity).toggleClass(_this._settings.toggleClass);
            }
        }
      };
    })(this));
  };

  Toggle.prototype._handleHoverEvent = function() {
    if (this._settings.initialState) {
      this._settings.initialState(this._settings);
    }
    return this._settings.$element.on({
      mouseenter: (function(_this) {
        return function(event) {
          return _this._handleHoverStateEvent($(event.currentTarget), 'on');
        };
      })(this),
      mouseleave: (function(_this) {
        return function(event) {
          return _this._handleHoverStateEvent($(event.currentTarget), 'off');
        };
      })(this)
    });
  };

  Toggle.prototype._handleHoverStateEvent = function($element, state) {
    var base, base1;
    switch (state) {
      case 'on':
        if (typeof (base = this._settings).onMouseover === "function") {
          base.onMouseover(this._settings);
        }
        $element.addClass(this._settings.activeClass);
        break;
      case 'off':
        if (typeof (base1 = this._settings).onMouseout === "function") {
          base1.onMouseout(this._settings);
        }
        $element.removeClass(this._settings.activeClass);
    }
    switch (this._settings.proximity) {
      case 'next':
        return this._toggleClass($element.next());
      case 'prev':
        return this._toggleClass($element.prev());
      case 'nextParent':
        return this._toggleClass($element.parent().next());
      case 'prevParent':
        return this._toggleClass($element.parent().prev());
      default:
        if (typeof this._settings.proximity === 'object') {
          return this._toggleClass(this._settings.proximity);
        } else {
          return this._toggleClass($element.find(this._settings.proximity));
        }
    }
  };

  Toggle.prototype._toggleClass = function($element, classToToggle) {
    if (classToToggle == null) {
      classToToggle = this._settings.toggleClass;
    }
    if ($element.hasClass(classToToggle)) {
      return $element.removeClass(classToToggle);
    } else {
      return $element.addClass(classToToggle);
    }
  };

  return Toggle;

})(Spellbook.Classes.Base);

this.Spellbook.Services.autoSubmit = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-autoSubmit')
  }, options);
  return settings.$element.on('change', function() {
    return $(this).closest('form').trigger('submit');
  });
};

this.Spellbook.Services.clickOut = function(options) {
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

this.Spellbook.Services.contextMenu = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-contextMenu'),
    activeClass: 'is-active'
  }, options);
  $(document).on('contextmenu', function(event) {
    event.preventDefault();
    return settings.$element.css({
      top: event.pageY + 'px',
      left: event.pageX + 'px'
    }).addClass(settings.activeClass);
  });
  return $(document).on('click', function(event) {
    return settings.$element.removeClass(settings.activeClass);
  });
};

this.Spellbook.Services.escapeOut = function(options) {
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

this.Spellbook.Services.filter = function(options) {
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

this.Spellbook.Services.fixOrphanWords = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-orphan')
  }, options);
  return settings.$element.each(function() {
    var $element, finalTitle, i, j, ref, wordArray;
    $element = $(this);
    wordArray = $element.text().split(' ');
    finalTitle = '';
    for (i = j = 0, ref = wordArray.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
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

this.Spellbook.Services.focusFirstInput = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-focusFirstInput')
  }, options);
  return settings.$element.find('input, textarea, [contenteditable]').filter(':visible').first().trigger('focus');
};

this.Spellbook.Services.formPreview = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-formPreview-input'),
    idName: 'formPreview',
    dataAttr: 'preview',
    onKeyup: null
  }, options);
  return settings.$element.on('keyup', function(event) {
    var $element, index, value;
    $element = $(this);
    value = $element.val();
    index = $element.data(settings.dataAttr);
    $("#" + settings.idName + "-" + index).text(value);
    if (settings.onKeyup != null) {
      return settings.onKeyup(settings);
    }
  });
};

this.Spellbook.Services.limiter = function(options) {
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

this.Spellbook.Services.loader = function(options) {
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

this.Spellbook.Services.prefixClasses = function(options) {
  var settings;
  settings = $.extend({
    $element: $('.js-prefixClasses'),
    query: '[ class ]',
    prefix: 'prefix'
  }, options);
  return settings.$element.find(settings.query).each(function() {
    var classArray, className, i, len, node, prefixedClasses;
    node = this;
    classArray = node.className.split(' ');
    prefixedClasses = '';
    for (i = 0, len = classArray.length; i < len; i++) {
      className = classArray[i];
      prefixedClasses = prefixedClasses + " " + settings.prefix + "-" + className;
    }
    return node.className = prefixedClasses;
  });
};

this.Spellbook.Services.scrollTo = function(options) {
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

this.Spellbook.Services.scrollTrigger = function(options) {
  var active, scrolled, settings;
  settings = $.extend({
    $element: $('.js-scrollTrigger'),
    scrollPadding: 400,
    activeClass: 'is-active',
    onTrigger: null
  }, options);
  scrolled = $(window).scrollTop();
  if (settings.$element.offset().top >= 0) {
    active = scrolled - settings.$element.offset().top - settings.scrollPadding;
  }
  if (!settings.$element.hasClass(settings.activeClass) && active) {
    settings.$element.addClass(settings.activeClass);
    return typeof settings.onTrigger === "function" ? settings.onTrigger(settings) : void 0;
  }
};

this.Spellbook.Services.shortcut = function(options) {
  var settings;
  settings = $.extend({
    $element: $('[data-shortcut]'),
    dataAttribute: 'shortcut',
    keyCodes: Spellbook.Helpers.keyCodes
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

this.Spellbook.Helpers.isBlank = function(string) {
  if (string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
};

this.Spellbook.Helpers.keyCodes = {
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

this.Spellbook.Helpers.randomizer = function(collection) {
  var randomNumber;
  randomNumber = Math.floor(Math.random() * collection.length);
  return collection[randomNumber];
};

this.Spellbook.Helpers.sanitize = function(string) {
  return string.replace(/(<([^>]+)>)/ig, '');
};

this.Spellbook.Helpers.slugify = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
};

this.Spellbook.Helpers.uid = function(length) {
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

this.Spellbook.Classes.ClassName = (function() {
  ClassName.prototype._settings = {};

  function ClassName(options) {
    this.options = options;
    this.init();
  }

  ClassName.prototype.init = function() {
    this._settings = $.extend({
      $element: $('.js-element')
    }, this.options);
    return this._setEventHandlers();
  };

  ClassName.prototype._setEventHandlers = function() {};

  return ClassName;

})();

this.Spellbook.Helpers.helperName = function(item) {};

this.Spellbook.Services.serviceName = function(options) {
  var settings;
  return settings = $.extend({
    $element: $('.js-element')
  }, options);
};
