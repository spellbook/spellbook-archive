describe('Spellbook.QueryParams', function() {
  it('should instantiate a new object', function() {
    this.qp = new Spellbook.QueryParams();
    return expect(this.qp).not.toBe(false);
  });
  beforeEach(function() {
    return this.qp = new Spellbook.QueryParams({
      url: 'http://www.example.com/?param1=true&param2=false'
    });
  });
  describe('#parseQueryString', function() {
    return it('should parse the query string', function() {
      return expect(this.qp.variables).toEqual(['param1=true', 'param2=false']);
    });
  });
  describe('#sortParams', function() {
    return it('should sort the parameters', function() {
      return expect(this.qp.params).toEqual({
        'param1': 'true',
        'param2': 'false'
      });
    });
  });
  describe('.allParams', function() {
    return it('should return a list of the parameters', function() {
      return expect(this.qp.allParams()).toEqual({
        'param1': 'true',
        'param2': 'false'
      });
    });
  });
  describe('.matchParamKey', function() {
    return it('should return a correct match on a parameter key', function() {
      return expect(this.qp.matchParamKey('param1')).toBe(true);
    });
  });
  describe('.matchParamValue', function() {
    return it('should return a correct match on a parameter value', function() {
      return expect(this.qp.matchParamValue('true')).toBe(true);
    });
  });
  describe('.matchParamKey', function() {
    return it('should not return a correct match on a parameter key', function() {
      return expect(this.qp.matchParamKey('param3')).not.toBe(true);
    });
  });
  return describe('.matchParamValue', function() {
    return it('should not return a correct match on a parameter value', function() {
      return expect(this.qp.matchParamValue('turtle')).not.toBe(true);
    });
  });
});
