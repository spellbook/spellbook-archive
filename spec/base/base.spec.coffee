describe 'Spellbook.Classes.Base', ->

  describe 'without arguments', ->
    beforeEach ->
      class ExtendsBase extends Spellbook.Classes.Base

      @extendsBase = new ExtendsBase

    it 'should cause extended classes to be an instance of itself', ->
      expect( @extendsBase instanceof Spellbook.Classes.Base ).toBeTruthy()

    it 'should contain a _settings object in extended classes', ->
      expect( @extendsBase._settings ).toBeDefined()
