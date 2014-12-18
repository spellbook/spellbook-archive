CoffeeScript Styleguide
=======================

General
-------

- Use soft tabs with two-space indentation
- Use `camelCase`
- Don't use parenthesis with conditional statements (`if`, `switch`, else.)

### Parmeters

No empty parameter list.

```coffeescript
# BAD
foo = () ->

# GOOD
foo = ->
```

### Quotes

_Always_ use single quotes _unless_ it is a string with string interpolation or it has punctuation that requires escaping.

```coffeescript
# BAD
foo = "bar"
foo = 'bar\'s got baz'

# GOOD
foo = 'bar'
foo = "bar's got baz"
```

Spacing
-------

No trailing whitespace.

### Parenthesis

_Always_ use a single space inside parenthesis.

```coffeescript
# BAD
foo(bar)

# GOOD
foo( bar )

# BAD
foo(bar.baz)

# GOOD
foo( bar.baz )

# BAD
foo(bar, baz)

# GOOD
foo( bar, baz )

# BAD
foo(bar())

# GOOD
foo( bar() )

# BAD
foo('string')

# GOOD
foo( 'string' )
```

### String Interpolation

Use a single space inside string interpolation.

```coffeescript
# BAD
foo = 'string'
bar = "I am a #{foo}"

# GOOD
foo = 'string'
bar = "I am a #{ foo }"
```

### Assignment Spacing

Add a single space on either side of all assignments.

```coffeescript
# BAD
foo=bar
foo: bar

# GOOD
foo = bar
foo : bar
```

### Assignment Alignment

This is nitpicky, but make sure to align your assignment operators.

```coffeescript
# BAD
foo = bar
foobar = baz

# GOOD
foo    = bar
foobar = baz

# BAD
foo =
  foobar: baz
  bar: foobar

# GOOD
foo =
  foobar : baz
  bar    : foobar
```

### Maximum Line Length

Try and keep your lines within 80 characters.

Comments
--------

There are four heading levels.

```coffeescript
# *************************************
#
#   First-level Heading
#   -> Description
#
# *************************************

# -------------------------------------
#   Second-level Heading
# -------------------------------------

# ----- Third-level Heading ----- #

# Fourth-level Heading
```

Naming
------

Use explicit names whenever possible.

```coffeescript
# BAD
evt  = ''
elem = ''

# GOOD
event   = ''
element = ''
```

### Boolean Variables

Prefix boolean variables with `is`.

```coffeescript
# GOOD
isEditing = true
```

### Private Variables & Methods

If you don't expose your variables and/or methods to the outside world, prefix them with an underscore (`_`).

```coffeescript
# BAD
privateVariable = false

# GOOD
_privateVariable = false

# BAD
privateMethod = ->

# GOOD
_privateMethod = ->
```

### Return Values

Even though the last operation is implied to be returned in CoffeeScript, still use the `return` keyword.

```coffeescript
# BAD
foo = ->
  true

# GOOD
foo = ->
  return true
```

Operator Keywords
-----------------

Whenever possible, use CoffeeScripts' operator keyword aliases, such as `is`, `isnt`, `or`, `and`, etc.

```coffeescript
# BAD
if foo == bar
  # ...

# GOOD
if foo is bar
  # ...
```

