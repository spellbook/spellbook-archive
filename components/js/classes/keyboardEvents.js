this.Spellbook.Classes.KeyboardEvents = (function() {
  KeyboardEvents.prototype._settings = {};

  function KeyboardEvents(options) {
    this.options = options;
    this.init();
  }

  KeyboardEvents.prototype.init = function() {
    this._settings = $.extend({
      events: []
    }, this.options);
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

})();
