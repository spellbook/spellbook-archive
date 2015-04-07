this.Spellbook.Classes.ClassName = (function() {

  /*
    Called when the object is instantiated, and it immediately
    defers to an 'init' method, which can be called without having
    to instantiate an object.
  
    @options sets instance variables for all of the options that are
    passed in.
   */
  function ClassName(options) {
    this.options = options;
    this.init();
  }

  ClassName.prototype.init = function() {

    /* 
      Call 'setEventHandlers' method to set up all of the
      individual event handlers for the elements of the class
     */
    return this.setEventHandlers();
  };

  ClassName.prototype.setEventHandlers = function() {
    return this.options.$element.on('click', (function(_this) {
      return function(event) {
        return _this.doSomething();
      };
    })(this));
  };

  ClassName.prototype.doSomething = function() {};


  /*
    Class methods start with an '@' sign before the name, and
    they aren't called by the instantiated object but, rather,
    from within the class
  
    e.g. ClassName.klassMethod()
   */

  ClassName.klassMethod = function() {};

  return ClassName;

})();
