Spellbook.Classes.Singleton
===========================

The purpose of the Singleton class is to only have one single instance of a class at any time. Using the `getInstance()` method, you are either creating the first instance or returning the already-created instance.

To use the Singleton pattern on an existing class, simply extend the Singleton class, like so:

```coffeescript
class @Spellbook.Classes.Dispatcher extends Spellbook.Classes.Singleton
  # ...
```

When you need a new object, use the `getInstance()` method:

```coffeescript
dispatcher = Spellbook.Classes.Dispatcher.getInstance()
```

If you need to pass in options, do it like so:

```coffeescript
Spellbook.Classes.Dispatcher.getInstance
  events : [
    { ... }
  ]
```
