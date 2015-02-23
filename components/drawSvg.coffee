# *************************************
#
#   Draw SVG
#   -> Draw SVG paths
#
# *************************************

class @Spellbook.DrawSvg

  # -------------------------------------
  #   Instance Variables
  # -------------------------------------

  _settings     : {}
  _paths        : []
  _lengths      : []
  _currentFrame : 0
  _totalFrames  : 60
  _handle       : 0
  _progress     : 0

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor: ( @options ) -> @init()

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ->
    @_settings = $.extend
      $element : $( '.js-drawSvg' ),
      prefix   : 'path'
    , @options

    @_setStorage()

  # -------------------------------------
  #   Set Storage
  # -------------------------------------

  _setStorage: ->
    numberOfPaths = @_settings.$element.find( 'path' ).length

    for index in [ 0...numberOfPaths - 1 ]
      @_paths[ index ]   = document.getElementById( "#{ @_settings.prefix }-#{ index }" )
      length             = @_paths[ index ].getTotalLength()
      @_lengths[ index ] = length

      @_paths[ index ].style.strokeDasharray  = "#{ length } #{ length }"
      @_paths[ index ].style.strokeDashoffset = length

  # -------------------------------------
  #   Set Stroke
  # -------------------------------------

  _setStroke: ->
    for index in [ 0...@_paths.length ]
      @_paths[ index ].style.strokeDashoffset = Math.floor( @_lengths[ index ] * ( 1 - @_progress ) )

  # -------------------------------------
  #   Draw
  # -------------------------------------

  draw: =>
    @_progress = @_currentFrame / @_totalFrames

    if @_progress > 1
      window.cancelAnimationFrame( handle )
    else
      @_currentFrame++

      @_setStroke()

      handle = window.requestAnimationFrame( @draw )

# -------------------------------------
#   Usage
# -------------------------------------
#
# svg = new Spellbook.DrawSvg()
# svg.draw()
#
