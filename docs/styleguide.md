CoffeeScript Styleguide
=======================

- General
- Spacing
- Comments
- Naming
- Operator Keywords
- Quote Styles & Interpolation
- jQuery Styleguide

General
-------

- Use soft tabs with two-space indentation
- Use `camelCase`
- No empty parameter list

```coffeescript
# BAD
foo = () ->

# GOOD
foo = ->
```

- _Always_ use single quotes _unless_ it is a string with string interpolation or it has punctuation that requires escaping.

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

- No trailing whitespace

### Parenthesis

_Always_ use a single space inside parenthesis **unless it is a single word**.

```coffeescript
# BAD
foo( bar )

# GOOD
foo(bar)

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
```

### String Interpolation

- Use a single space inside string interpolation

```coffeescript
# BAD
foo = 'string'
bar = "I am a #{foo}"

# BAD
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
foo = {
  foobar: baz
  bar: foobar
}

# GOOD
foo = {
  foobar : baz
  bar    : foobar
}
```

### Maximum Line Length

- Try and keep your lines within 80 characters.

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

- Use explicit names whenever possible.

```coffeescript
# BAD
evt  = ''
elem = ''

# BAD
event   = ''
element = ''
```

### Boolean Variables

- Prefix boolean variables with `is`

```coffeescript
# GOOD
isEditing = true
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

