Spellbook.Classes.DrawSvg
=========================

Markup
------

First, embed an SVG in the page nested within a container.

```html
<div class="js-drawSvg">
  <svg>
    <path id="path-0"></path>
    <path id="path-1"></path>
  </svg>
</div>
```

JavaScript (CoffeeScript)
-------------------------

Next, create an instance and call the `draw()` method.

```coffeescript
svg = new Spellbook.Classes.DrawSvg()
svg.draw()
```
