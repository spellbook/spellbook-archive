var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.Dispatcher = (function(superClass) {
  extend(Dispatcher, superClass);

  Dispatcher._defaults = {
    $element: $('.js-dispatcher'),
    dataAttr: 'dispatcher-page',
    events: []
  };

  function Dispatcher(options) {
    Dispatcher.__super__.constructor.call(this, options);
    this.dispatch();
  }

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
