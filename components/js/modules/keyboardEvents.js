this.Spellbook.Modules.KeyboardEvents = (function() {
  var _getKeyCode, _match, _settings, emit, init;
  _settings = {};
  init = function(options) {
    _settings = $.extend({
      events: []
    }, options);
    return emit();
  };
  _match = function(event) {
    return $(document).on('keyup', function(e) {
      switch (_getKeyCode(e)) {
        case event.key:
          return event.run();
      }
    });
  };
  _getKeyCode = function(event) {
    var charCode;
    event = event || window.event;
    charCode = event.keyCode || event.which;
    return charCode;
  };
  emit = function(event) {
    var i, len, ref, results;
    if (event == null) {
      event = null;
    }
    if (event == null) {
      ref = _settings.events;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        event = ref[i];
        results.push(_match(event));
      }
      return results;
    } else {
      return _match(event);
    }
  };
  return {
    init: init,
    emit: emit
  };
})();
