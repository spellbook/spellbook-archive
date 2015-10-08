var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.KeyboardEvents = (function(superClass) {
  extend(KeyboardEvents, superClass);

  function KeyboardEvents() {
    return KeyboardEvents.__super__.constructor.apply(this, arguments);
  }

  KeyboardEvents.prototype.init = function(options) {
    this._settings = $.extend({
      events: []
    }, options);
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
