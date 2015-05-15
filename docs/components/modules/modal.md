Spellbook.Modules.Modal
=======================

[CodePen](http://codepen.io/drewbarontini/pen/7ecffac2796ca9a1826c519184298097)

Markup
------

For the modal, you can use the following HTML:

```html
<div class="modal modal--center" id="modal">
  <a class="modal-close js-modal-close" data-modal="#modal" href="#">
    <b class="srt">Close</b>
  </a>
  <div class="modal-dialog">
    <div class="modal-content">
      <h1>I am a modal.</h1>
      <p>This is a modal! Srsly.</p>
    </div>
  </div>
</div>
```

And to trigger the modal with a link:

```html
<a class="js-modal-trigger" data-modal="#modal" href="#">Open Modal</a>
```

JavaScript (CoffeeScript)
-------------------------

To instantiate the modal:

```coffeescript
Spellbook.Modules.Modal.init()
```

To trigger the modal via JavaScript:

```coffeescript
# Open the modal
Spellbook.Modules.Modal.init().trigger( $( '#modal' ), 'open' )

# Close the modal
Spellbook.Modules.Modal.init().trigger( $( '#modal' ), 'close' )
```

CSS (Sass)
----------

Here is some sample styles you could use for the modal:

```sass
// *************************************
//
//   Modal
//   -> Overlay window
//
// -------------------------------------
//   Template (Haml)
// -------------------------------------
//
// .modal[.modal--s|l|center|n|nf|nw|ne|sw|se](.is-active)
//
// *************************************

// -------------------------------------
//   Helpers
// -------------------------------------

// ----- Faux Hide ----- //

.fauxHide
  opacity: 0
  visibility: hidden
    
// ----- Faux Show ----- //

.fauxShow
  opacity: 1
  visibility: visible

// -------------------------------------
//   Variables
// -------------------------------------

// ----- Colors ----- //

$modal-backdrop-background: #363640 !default
$modal-backdrop-opacity: 0.85 !default
$modal-close-color: white !default
$modal-close-hover-color: rgba(white, 0.5) !default
$modal-content-background: white !default

// ----- Borders & Box Shadows ----- //
 
$modal-close-border: 2px solid $modal-close-color !default
$modal-content-borderRadius: 2px !default
$modal-content-boxShadow: 0 2px 1px rgba(#000, 0.45) !default

// ----- Positioning ----- //

$modal-close-position: 'outside' !default
$modal-dialog-positions: 'center', 'n', 'nf', 'nw', 'ne', 'sw', 'se' !default

// ----- Settings ----- //

// 'fadeIn', 'scaleUp', 'scaleDown', 'slideUp', 'slideDown'
$modal-animation: 'scaleDown' !default
$modal-transitionSpeed: 0.3s !default
$modal-transitionTiming: ease-in-out !default
$modal-content-transition: $modal-transitionSpeed $modal-transitionSpeed $modal-transitionTiming !default
$modal-transition: $modal-transitionSpeed $modal-transitionTiming !default

// ----- Sizing ----- //

$modal-close-size: 30px !default
$modal-dialog-size-keys: 's', 'l' !default
$modal-dialog-size-values: 25em, 50em !default
$modal-dialog-width: 37.5em !default
$modal-space: 1.25em !default
$modal-space-xs: $modal-space * 0.25 !default
$modal-space-s: $modal-space * 0.5 !default
$modal-space-l: $modal-space * 2 !default

// ----- Typography ----- //

$modal-close-fontSize: 150% !default

// -------------------------------------
//   Base
// -------------------------------------

.modal
  @extend .fauxHide

// -------------------------------------
//   Modifiers
// -------------------------------------

// ----- Positioning ----- //

@each $position in $modal-dialog-positions

  .modal--#{$position}

    .modal-dialog
      @if $position == 'center'
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
      @if $position == 'n'
        left: 50%
        top: $modal-space-l
        transform: translateX(-50%)
      @if $position == 'nf'
        left: 50%
        top: 0
        transform: translateX(-50%)
      @if $position == 'nw'
        left: $modal-space
        top: $modal-space
      @if $position == 'ne'
        top: $modal-space
        right: $modal-space
      @if $position == 'sw'
        bottom: $modal-space
        left: $modal-space
      @if $position == 'se'
        bottom: $modal-space
        right: $modal-space

// ----- Sizing ----- //

@for $i from 1 through length($modal-dialog-size-keys)

  .modal--#{ nth($modal-dialog-size-keys, $i) }

    .modal-dialog
      width: nth($modal-dialog-size-values, $i)

// -------------------------------------
//   States
// -------------------------------------

// ----- Global ----- //

.is-modal-active
  overflow: hidden

// ----- Active ----- //

.modal.is-active
  @extend .fauxShow
    
  .modal-close
    opacity: 1
    visibility: visible
    
  .modal-content
    @extend .fauxShow
    @if $modal-animation == 'scaleUp' or $modal-animation == 'scaleDown'
      transform: scale(1)
    @if $modal-animation == 'slideUp' or $modal-animation == 'slideDown'
      transform: translateY(0)

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Backdrop ----- //

.modal-backdrop
  background: $modal-backdrop-background
  bottom: 0
  height: 100%
  left: 0
  opacity: 0
  position: absolute
  right: 0
  top: 0
  transition: opacity $modal-transition, visibility $modal-transition
  visibility: hidden
  width: 100%
  z-index: 1
  
// States
  
.modal-backdrop.is-active
  opacity: $modal-backdrop-opacity
  visibility: visible

// ----- Content ----- //

.modal-content
  @extend .fauxHide
  background: $modal-content-background
  border-radius: $modal-content-borderRadius
  box-shadow: $modal-content-boxShadow
  padding: $modal-space
  @if $modal-animation == 'fadeIn'
    transition: opacity $modal-content-transition
  @if $modal-animation == 'scaleUp'
    transform: scale(0.7)
    transition: $modal-content-transition
  @if $modal-animation == 'scaleDown'
    transform: scale(1.7)
    transition: $modal-content-transition
  @if $modal-animation == 'slideUp'
    transform: translateY(50%)
    transition: $modal-content-transition
  @if $modal-animation == 'slideDown'
    transform: translateY(-50%)
    transition: $modal-content-transition

// ----- Dialog ----- //

.modal-dialog
  box-sizing: border-box
  position: fixed
  width: $modal-dialog-width
  z-index: 2

// ----- Close ----- //

.modal-close
  border: $modal-close-border
  border-radius: 50%
  color: $modal-close-color
  font-size: $modal-close-fontSize
  line-height: $modal-close-size
  height: $modal-close-size
  opacity: 0
  right: $modal-space-s
  text-align: center
  text-decoration: none
  top: $modal-space-s
  transition: border-color $modal-transition, color $modal-transition, opacity $modal-content-transition
  visibility: hidden
  width: $modal-close-size
  z-index: 2
  &:hover,
  &:focus
    border-color: $modal-close-hover-color
    color: $modal-close-hover-color
  &::before
    content: "\00d7"
  @if $modal-close-position == 'outside'
    position: fixed
  @if $modal-close-position == 'inside'
    position: absolute
```

