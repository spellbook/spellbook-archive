describe 'Spellbook.Classes.QueryParams', ->

  it 'should instantiate a new object', ->
    @qp = new Spellbook.Classes.QueryParams()
    expect( @qp ).to.be.instance

  beforeEach ->
    @qp = new Spellbook.Classes.QueryParams( { url : 'http://www.example.com/?param1=true&param2=false' } )

  describe '#parseQueryString', ->
    it 'should parse the query string', ->
      expect( @qp.variables ).to.eql( ['param1=true', 'param2=false'] )

  describe '#sortParams', ->
    it 'should sort the parameters', ->
      expect( @qp.params ).to.eql( { 'param1' : 'true', 'param2' : 'false' } )

  describe '.allParams', ->
    it 'should return a list of the parameters', ->
      expect( @qp.allParams() ).to.eql( { 'param1' : 'true', 'param2' : 'false' } )

  describe '.matchParamKey', ->
    it 'should return a correct match on a parameter key', ->
      expect( @qp.matchParamKey( 'param1' ) ).to.be.true

  describe '.matchParamValue', ->
    it 'should return a correct match on a parameter value', ->
      expect( @qp.matchParamValue( 'true' ) ).to.be.true

  describe '.matchParamKey', ->
    it 'should not return a correct match on a parameter key', ->
      expect( @qp.matchParamKey( 'param3' ) ).to.be.false

  describe '.matchParamValue', ->
    it 'should not return a correct match on a parameter value', ->
      expect( @qp.matchParamValue( 'turtle' ) ).to.be.false
