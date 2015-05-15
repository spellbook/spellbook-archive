Spellbook.Modules.KeyboardEvents
================================

JavaScript (CoffeeScript)
-------------------------

```coffeescript
Spellbook.Modules.KeyboardEvents
  events : [
    {
      key: 27
      run: -> someEvent() # Run function when 'escape' key is hit.
    },
    {
      key: 13
      run: -> someEvent() # Run function when 'enter' key is hit.
    }
  ]
```

Alternitavely, you can call the `emit` method, passing in a single event:

```coffeescript
Spellbook.Classes.KeyboardEvents.emit
  key: 13
  run: -> someEvent()
```
