Spellbook.scrollTo
==================

Markup
------

```html
<a href="#section" class="js-scrollTo">Scroll To</a>

<!-- ... -->

<div id="section">
<!-- ... -->
</div>
```

JavaScript
----------

```coffeescript
Spellbook.scrollTo({
  element: $('.js-scrollTo')
  speed: 250
})
```