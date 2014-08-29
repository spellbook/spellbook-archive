describe('Spellbook.QueryParams', function() {
  beforeEach(function() {
    this.qp = new Spellbook.QueryParams();
    this.qp.variables = ['param1=true', 'param2=false'];
    return this.qp.params = {
      'param1': 'true',
      'param2': 'false'
    };
  });
  it('should instantiate a new object', function() {
    return expect(this.qp).not.toBe(false);
  });
  describe('#parseQueryString', function() {
    return xit('should sort parse the query string', function() {});
  });
  describe('#sortParams', function() {
    return xit('should sort the parameters', function() {});
  });
  describe('.allParams', function() {
    return it('should return a list of the parameters', function() {
      return expect(this.qp.allParams()).toBe(this.qp.params);
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
