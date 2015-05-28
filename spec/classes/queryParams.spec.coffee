describe 'Spellbook.Classes.QueryParams', ->

  it 'should instantiate a new object', ->
    @qp = new Spellbook.Classes.QueryParams()
    expect( @qp ).not.toBe( false )

  beforeEach ->
    @qp = new Spellbook.Classes.QueryParams( { url: 'http://www.example.com/?param1=true&param2=false' } )

  describe '#parseQueryString', ->
    it 'should parse the query string', ->
      expect( @qp.variables ).toEqual( ['param1=true', 'param2=false'] )

  describe '#sortParams', ->
    it 'should sort the parameters', ->
      expect( @qp.params ).toEqual( { 'param1': 'true', 'param2': 'false', throwFailures: 'false' } )

  describe '.allParams', ->
    it 'should return a list of the parameters', ->
      expect( @qp.allParams() ).toEqual( { 'param1': 'true', 'param2': 'false', throwFailures: 'false' } )

  describe '.matchParamKey', ->
    it 'should return a correct match on a parameter key', ->
      expect( @qp.matchParamKey( 'param1' ) ).toBe( true )

  describe '.matchParamValue', ->
    it 'should return a correct match on a parameter value', ->
      expect( @qp.matchParamValue( 'true' ) ).toBe( true )

  describe '.matchParamKey', ->
    it 'should not return a correct match on a parameter key', ->
      expect( @qp.matchParamKey( 'param3' ) ).not.toBe( true )

  describe '.matchParamValue', ->
    it 'should not return a correct match on a parameter value', ->
      expect( @qp.matchParamValue( 'turtle' ) ).not.toBe( true )
