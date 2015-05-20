describe('Spellbook.Classes.Singleton', function() {
  beforeEach(function() {
    this.a = Spellbook.Classes.Singleton.getInstance();
    return this.b = Spellbook.Classes.Singleton.getInstance();
  });
  return it('should set both objects to the same instance', function() {
    return expect(this.a).toEqual(this.b);
  });
});
