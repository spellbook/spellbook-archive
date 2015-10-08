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
