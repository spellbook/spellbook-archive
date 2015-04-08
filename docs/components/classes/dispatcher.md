Spellbook.Classes.Dispatcher
============================

Markup
------

```html
<body class='js-dispatcher' data-dispatcher-page='home'>
  <!-- ... -->
</body>
```

JavaScript (CoffeeScript)
-------------------------

```coffeescript
new Spellbook.Classes.Dispatcher
  events: [
    {
      page: 'home',
      run: -> Home.init() # Run page-specific JS on the Home page.
    },
    {
      page: 'about',
      run: -> About.init() # Run page-specific JS on the About page.
    }
  ]
```

Alternitavely, you can call the `dispatch` method, passing in a single event:

```coffeescript
dispatcher = new Spellbook.Classes.Dispatcher
dispatcher.dispatch
  page: 'home'
  run: -> Home.init()
```
