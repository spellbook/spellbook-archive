this.Spellbook.Classes.Dispatcher = (function() {
  Dispatcher.prototype._settings = {};

  function Dispatcher(options) {
    this.options = options;
    this.init();
  }

  Dispatcher.prototype.init = function() {
    this._settings = $.extend({
      $element: $('.js-dispatcher'),
      dataAttr: 'dispatcher-page',
      events: {}
    }, this.options);
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
            results.push(event.run());
            break;
          default:
            results.push(void 0);
        }
      }
      return results;
    } else {
      switch (event.page) {
        case page:
          return event.run();
      }
    }
  };

  Dispatcher.prototype._getCurrentPage = function() {
    return this._settings.$element.data(this._settings.dataAttr);
  };

  return Dispatcher;

})();

new Spellbook.Classes.Dispatcher({
  events: [
    {
      page: 'home',
      run: function() {
        return console.log('home');
      }
    }, {
      page: 'about',
      run: function() {
        return console.log('about');
      }
    }, {
      page: 'contact',
      run: function() {
        return console.log('contact');
      }
    }
  ]
});
