describe 'Spellbook.QueryParams', ->
  beforeEach ->
    @qp = new Spellbook.QueryParams()
    @qp.variables = ['param1=true', 'param2=false']
    @qp.params = { 'param1': 'true', 'param2': 'false' }

  it 'should instantiate a new object', ->
    expect(@qp).not.toBe(false)

  describe '#parseQueryString', ->
    xit 'should sort parse the query string', ->
      #expect(@qp.variables).toBe(['param1=true', 'param2=false'])

  describe '#sortParams', ->
    xit 'should sort the parameters', ->
      #expect(@qp.params).toBe({ 'param1': true, 'param2': false })

  describe '.allParams', ->
    it 'should return a list of the parameters', ->
      expect(@qp.allParams()).toBe(@qp.params)

  describe '.matchParamKey', ->
    it 'should return a correct match on a parameter key', ->
      expect(@qp.matchParamKey('param1')).toBe(true)

  describe '.matchParamValue', ->
    it 'should return a correct match on a parameter value', ->
      expect(@qp.matchParamValue('true')).toBe(true)

  describe '.matchParamKey', ->
    it 'should not return a correct match on a parameter key', ->
      expect(@qp.matchParamKey('param3')).not.toBe(true)

  describe '.matchParamValue', ->
    it 'should not return a correct match on a parameter value', ->
      expect(@qp.matchParamValue('turtle')).not.toBe(true)
