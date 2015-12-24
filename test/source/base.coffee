describe 'Spellbook.Classes.Base', ->

  beforeEach ->
    class ExtendsBase extends Spellbook.Classes.Base

    @extendsBase = new ExtendsBase

  it 'should cause extended classes to be an instance of itself', ->
    expect( @extendsBase instanceof Spellbook.Classes.Base ).to.be.truthy

  it 'should contain a _settings object in extended classes', ->
    expect( @extendsBase._settings ).to.exist
