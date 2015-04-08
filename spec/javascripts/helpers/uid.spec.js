describe('Spellbook.uid', function() {
  it('should generate a ten-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid();
    return expect(id).toMatch(/^[0-9a-zA-Z]{10}/);
  });
  it('should generate a twelve-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid(12);
    return expect(id).toMatch(/^[0-9a-zA-Z]{12}/);
  });
  return it('should generate a twenty-four-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid(24);
    return expect(id).toMatch(/^[0-9a-zA-Z]{24}/);
  });
});
