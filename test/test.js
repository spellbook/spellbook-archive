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

describe('Spellbook.Services.filter', function() {
  before(function() {
    return this.fixture = new Fixture('<ul> <li><a href="#all" class="link-all js-filter-link">All</a></li> <li><a href="#set-01" class="link-first js-filter-link">Set 01</a></li> <li><a href="#set-02" class="link-second js-filter-link">Set 02</a></li> <li><a href="#set-03" class="link-third js-filter-link">Set 03</a></li> </ul> <div class="js-filter"> <div class="all js-filter-item" data-item="all"> <p>This is an item.</p> </div> <div class="all js-filter-item" data-item="all"> <p>This is an item.</p> </div> <div class="set-01 js-filter-item" data-item="set-01"> <p>This is an item.</p> </div> <div class="set-01 js-filter-item" data-item="set-01"> <p>This is an item.</p> </div> <div class="set-02 js-filter-item" data-item="set-02"> <p>This is an item.</p> </div> <div class="set-02 js-filter-item" data-item="set-02"> <p>This is an item.</p> </div> </div>');
  });
  beforeEach(function() {
    this.element = $('.js-filter');
    this.item = $('.js-filter-item');
    this.link = $('.js-filter-link');
    this.empty = '<p>There are no items to show.</p>';
    this.classActive = 'is-active';
    this.classHidden = 'is-hidden';
    return Spellbook.Services.filter();
  });
  it('should trigger a click on the filter link', function() {
    var spy;
    spy = sinon.spy(this.link, 'click');
    this.link.click();
    return expect(spy).to.be.called;
  });
  it('should add an active class to the clicked link', function() {
    this.link.first().click();
    return expect(this.link.first()).to.have["class"](this.classActive);
  });
  it('should remove the active class from all other links', function() {
    this.link.first().click();
    return expect(this.link.not(this.link.first())).not.to.have["class"](this.classActive);
  });
  it('should show the first set when the first set link is clicked', function() {
    var firstSet, firstSetLink;
    firstSetLink = $('.link-first');
    firstSet = $('.set-01');
    firstSetLink.click();
    return expect(firstSet).not.to.have["class"](this.classHidden);
  });
  it('should show the second set when the second set link is clicked', function() {
    var secondSet, secondSetLink;
    secondSetLink = $('.link-second');
    secondSet = $('.set-02');
    secondSetLink.click();
    return expect(secondSet).not.to.have["class"](this.classHidden);
  });
  it('should show all elements when the all link is clicked', function() {
    var allLink;
    allLink = $('.link-all');
    allLink.click();
    return expect(this.item).not.to.have["class"](this.classHidden);
  });
  it('should show an empty message when there are not items in the set', function() {
    var thirdSetLink;
    thirdSetLink = $('.link-third');
    thirdSetLink.click();
    return expect(this.element.html()).to.contain(this.empty);
  });
  return afterEach(function() {
    return this.fixture.cleanup();
  });
});

describe('Spellbook.Services.fixOrphanWords', function() {
  before(function() {
    return this.fixture = new Fixture('<p class="js-orphan">This is a paragraph of words.</p>');
  });
  beforeEach(function() {
    this.element = $('.js-orphan');
    return Spellbook.Services.fixOrphanWords();
  });
  it('should add a non-breaking space', function() {
    return expect(this.element.html()).to.contain('&nbsp;');
  });
  return afterEach(function() {
    return this.fixture.cleanup();
  });
});

describe('Spellbook.Services.focusFirstInput', function() {
  before(function() {
    return this.fixture = new Fixture('<form action="" class="js-focusFirstInput"> <input type="hidden" /> <input type="text" /> <input type="text" /> <input type="text" /> </form> <form action="" class="js-focusFirstInput-2"> <input type="hidden" /> <textarea>Focus me!</textarea> <textarea>Focus me!</textarea> <textarea>Focus me!</textarea> </form> <form action="" class="js-focusFirstInput-3"> <input type="hidden" /> <p contenteditable>Focus me!</p> <p contenteditable>Focus me!</p> <p contenteditable>Focus me!</p> </form>');
  });
  beforeEach(function() {
    this.hiddenInput = $('input[type="hidden"]');
    this.textInput = $('input[type="text"]');
    this.textarea = $('textarea');
    return this.contenteditable = $('[contenteditable]');
  });
  it('should not focus the hidden input element', function() {
    Spellbook.Services.focusFirstInput();
    return expect($(':focus')).to.not.match(this.hiddenInput[0]);
  });
  xit('should focus the first text input element', function() {
    Spellbook.Services.focusFirstInput();
    return expect($(':focus')).to.match(this.textInput[0]);
  });
  xit('should focus the first textarea element', function() {
    Spellbook.Services.focusFirstInput({
      $element: $('.js-focusFirstInput-2')
    });
    return expect($(':focus')).to.match(this.textarea[0]);
  });
  xit('should focus the first contenteditable element', function() {
    Spellbook.Services.focusFirstInput({
      $element: $('.js-focusFirstInput-3')
    });
    return expect($(':focus')).to.match(this.contenteditable[0]);
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
