this.Spellbook.Classes.FormValidator = (function() {
  FormValidator.prototype._settings = {};

  FormValidator.prototype._input = null;

  FormValidator.prototype._errors = [];

  FormValidator.prototype._validators = ['required'];

  function FormValidator(options) {
    this.options = options;
    this.init();
  }

  FormValidator.prototype.init = function() {
    this._settings = $.extend({
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
    }, this.options);
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
    switch (state) {
      case 'error':
        this._setError(message);
        this._setInputState(message);
        if (this._settings.onError != null) {
          return this._settings.onError(this._settings);
        }
        break;
      case 'success':
        this._removeError();
        this._removeInputState();
        if (this._settings.onSuccess != null) {
          return this._settings.onSuccess(this._settings);
        }
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

})();
