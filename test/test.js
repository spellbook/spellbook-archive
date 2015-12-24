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

describe('Spellbook.Services.formPreview', function() {
  before(function() {
    return this.fixture = new Fixture('<form action=""> <input class="js-formPreview-input" type="text" data-preview="1" /> <input class="js-formPreview-input" type="text" data-preview="2" /> <input class="js-formPreview-input" type="text" data-preview="3" /> </form> <div id="formPreview"> <h1 id="formPreview-1"></h1> <h3 id="formPreview-2"></h3> <p id="formPreview-3"></p> </div>');
  });
  beforeEach(function() {
    this.element = $('.js-formPreview-input');
    this.idName = 'formPreview';
    return Spellbook.Services.formPreview();
  });
  it('should trigger a keyup event when the input is typed in', function() {
    var spy;
    spy = sinon.spy(this.element, 'keyup');
    this.element.keyup();
    return expect(spy).to.be.called;
  });
  it('should show the first input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="1"]');
    tag = $('#formPreview-1');
    string = 'Hello, friend!';
    element.val(string);
    element.keyup();
    return expect(tag.text()).to.equal(string);
  });
  it('should show the second input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="2"]');
    tag = $('#formPreview-2');
    string = 'Hello, friend!';
    element.val(string);
    element.keyup();
    return expect(tag.text()).to.equal(string);
  });
  it('should show the third input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="3"]');
    tag = $('#formPreview-3');
    string = 'Hello, friend!';
    element.val(string);
    element.keyup();
    return expect(tag.text()).to.equal(string);
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

describe('Spellbook.Services.limiter', function() {
  before(function() {
    return this.fixture = new Fixture('<div class="limiter"> <div class="js-limiter-element"> <p>Element.</p> </div> <div class="js-limiter-element"> <p>Element.</p> </div> <div class="js-limiter-element"> <p>Element.</p> </div> <div class="js-limiter-element"> <p>Element.</p> </div> <div class="js-limiter-element"> <p>Element.</p> </div> <a href="#" class="js-limiter-toggle">Toggle</a> </div>');
  });
  beforeEach(function() {
    this.container = $('.fixture--limiter');
    this.element = $('.js-limiter-element');
    this.toggle = $('.js-limiter-toggle');
    return this.hiddenClass = 'is-hidden';
  });
  it('should do nothing if there are less items than the limit', function() {
    Spellbook.Services.limiter({
      limit: 6
    });
    return expect(this.element).not.to.have["class"](this.hiddenClass);
  });
  it('should hide the toggle if there are less items than the limit', function() {
    Spellbook.Services.limiter({
      limit: 6
    });
    return expect(this.toggle).not.to.exist;
  });
  it('should add a hidden class to hide elements greater than the limit', function() {
    Spellbook.Services.limiter({
      limit: 4
    });
    return expect($('.js-limiter-element:nth-child( 5 )')).to.have["class"](this.hiddenClass);
  });
  it('should trigger a click on the toggle', function() {
    var spy;
    Spellbook.Services.limiter({
      limit: 2
    });
    spy = sinon.spy(this.toggle, 'click');
    this.toggle.click();
    return expect(spy).to.be.called;
  });
  return afterEach(function() {
    return this.fixture.cleanup();
  });
});

describe('Spellbook.Services.loader', function() {
  before(function() {
    return this.fixture = new Fixture('<a href="#" class="js-loader-toggle">Toggle</a> <div id="element" class="js-loader-element"> <p>This is an element.</p> </div>');
  });
  beforeEach(function() {
    this.classLoading = 'is-loading';
    this.classOverlay = 'loader-overlay';
    this.classSpinner = 'loader';
    this.element = $('.js-loader-element');
    this.overlay = 'div';
    this.spinner = 'span';
    this.toggle = $('.js-loader-toggle');
    return Spellbook.Services.loader();
  });
  it('should register a click on the toggle', function() {
    var spy;
    spy = sinon.spy(this.toggle, 'click');
    this.toggle.click();
    return expect(spy).to.be.called;
  });
  it('should append the spinner element', function() {
    this.toggle.click();
    return expect(this.element.html()).to.contain(this.spinner);
  });
  it('should append the overlay element', function() {
    this.toggle.click();
    return expect(this.element.html()).to.contain(this.overlay);
  });
  it('should add the spinner class to the spinner element', function() {
    this.toggle.click();
    return expect(this.element.find(this.spinner)).to.have["class"](this.classSpinner);
  });
  it('should add the overlay class to the overlay element', function() {
    this.toggle.click();
    return expect(this.element.find(this.overlay)).to.have["class"](this.classOverlay);
  });
  return it('should add the loading class to the element', function() {
    this.toggle.click();
    return expect(this.element).to.have["class"](this.classLoading);
  });
});

describe('Spellbook.Services.prefixClasses', function() {
  before(function() {
    return this.fixture = new Fixture('<div class="js-prefixClasses"> <p class="first">First</p> <p class="second">Second</p> </div>');
  });
  beforeEach(function() {
    this.element = $('.js-prefixClasses');
    this.firstChild = this.element.find('.first');
    return this.secondChild = this.element.find('.second');
  });
  it("should prepend a string to the matched elements' classes", function() {
    Spellbook.Services.prefixClasses();
    expect(this.firstChild).to.have["class"]('prefix-first');
    return expect(this.secondChild).to.have["class"]('prefix-second');
  });
  xit("should not prepend a string to the unmatched elements' classes", function() {
    Spellbook.Services.prefixClasses({
      query: '.second'
    });
    expect(this.firstChild).to.have["class"]('first');
    return expect(this.secondChild).to.have["class"]('prefix-second');
  });
  xit("should prepend a custom string to the matched elements' classes", function() {
    Spellbook.Services.prefixClasses({
      prefix: 'custom'
    });
    expect(this.firstChild).to.have["class"]('custom-first');
    return expect(this.secondChild).to.have["class"]('custom-second');
  });
  return afterEach(function() {
    return this.fixture.cleanup();
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
