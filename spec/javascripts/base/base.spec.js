var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

describe('Spellbook.Classes.Base', function() {
  beforeEach(function() {
    var ExtendsBase;
    ExtendsBase = (function(superClass) {
      extend(ExtendsBase, superClass);

      function ExtendsBase() {
        return ExtendsBase.__super__.constructor.apply(this, arguments);
      }

      return ExtendsBase;

    })(Spellbook.Classes.Base);
    return this.extendsBase = new ExtendsBase;
  });
  it('should cause extended classes to be an instance of itself', function() {
    return expect(this.extendsBase instanceof Spellbook.Classes.Base).toBeTruthy();
  });
  return it('should contain a _settings object in extended classes', function() {
    return expect(this.extendsBase._settings).toBeDefined();
  });
});
