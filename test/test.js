describe('Spellbook.Services.clickOut', function() {
  beforeEach(function() {
    this.document = $(document);
    this.element = $('<div class="js-clickout"></div>');
    return Spellbook.Services.clickOut({
      element: this.element,
      callback: function() {
        return 'turtle';
      }
    });
  });
  it('should trigger a click event on the element', function() {
    var spy;
    spy = sinon.spy(this.element, 'click');
    this.element.click();
    return expect(spy).to.be.called;
  });
  return it('should trigger a click event on the document', function() {
    var spy;
    spy = sinon.spy(this.document, 'click');
    this.document.click();
    return expect(spy).to.be.called;
  });
});

describe('Spellbook.Services.contextMenu', function() {
  before(function() {
    return this.fixture = new Fixture('<div class="js-contextMenu"> <p>This is my menu!</p> </div>');
  });
  beforeEach(function() {
    this.document = $(document);
    this.element = $('.js-contextMenu');
    this.classActive = 'is-active';
    return Spellbook.Services.contextMenu();
  });
  it('should trigger a contextmenu event on the document', function() {
    var spy;
    spy = sinon.spy(this.document, 'click');
    this.document.click();
    return expect(spy).to.be.called;
  });
  it('should add an active class on the contextmenu event', function() {
    this.document.trigger('contextmenu');
    return expect(this.element).to.have["class"](this.classActive);
  });
  it('should trigger a click event on the document', function() {
    var spy;
    spy = sinon.spy(this.document, 'click');
    this.document.click();
    return expect(spy).to.be.called;
  });
  it('should remove the active class when the document is clicked', function() {
    this.document.trigger('contextmenu');
    this.document.trigger('click');
    return expect(this.element).to.not.have["class"](this.classActive);
  });
  it('should apply inline CSS properties to the menu', function() {
    this.document.trigger('contextmenu');
    return expect(this.element).to.have.prop('style');
  });
  return afterEach(function() {
    return this.fixture.cleanup();
  });
});

describe('Spellbook.Helpers.isBlank', function() {
  it('should accept whitespace characters', function() {
    var string;
    string = ' ';
    return expect(Spellbook.Helpers.isBlank(string)).to.be.ok;
  });
  return it('should reject non-whitespace characters', function() {
    var string;
    string = 'a';
    return expect(Spellbook.Helpers.isBlank(string)).to.not.be.ok;
  });
});

describe('Spellbook.Helpers.randomizer', function() {
  return it('should return a random value from a collection', function() {
    var collection;
    collection = ['one', 'two', 'three'];
    return expect(Spellbook.Helpers.randomizer(collection)).to.match(/one|two|three/);
  });
});

describe('Spellbook.Helpers.sanitize', function() {
  it('should sanitize HTML input in a string', function() {
    var string;
    string = '<h1>This is a string.</h1>';
    return expect(Spellbook.Helpers.sanitize(string)).to.equal('This is a string.');
  });
  return it('should sanitize JavaScript input in a string', function() {
    var string;
    string = '<script type="text/javascript">This is a string.</script>';
    return expect(Spellbook.Helpers.sanitize(string)).to.equal('This is a string.');
  });
});

describe('Spellbook.Helpers.slugify', function() {
  beforeEach(function() {
    this.string = 'This is my title!';
    return this.sluggedString = Spellbook.Helpers.slugify(this.string);
  });
  return it('should convert the string into a slug', function() {
    return expect(this.sluggedString).to.equal('this-is-my-title');
  });
});

describe('Spellbook.Helpers.uid', function() {
  it('should generate a ten-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid();
    return expect(id).to.match(/^[0-9a-zA-Z]{10}/);
  });
  it('should generate a twelve-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid(12);
    return expect(id).to.match(/^[0-9a-zA-Z]{12}/);
  });
  return it('should generate a twenty-four-digit unique ID', function() {
    var id;
    id = Spellbook.Helpers.uid(24);
    return expect(id).to.match(/^[0-9a-zA-Z]{24}/);
  });
});
