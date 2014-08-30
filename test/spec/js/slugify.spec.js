describe('Spellbook.slugify', function() {
  beforeEach(function() {
    this.string = 'This is my title!';
    return this.sluggedString = Spellbook.slugify(this.string);
  });
  return it('should convert the string into a slug', function() {
    return expect(this.sluggedString).toEqual('this-is-my-title');
  });
});
