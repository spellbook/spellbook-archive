// *************************************
//
//   Gulpfile
//
// *************************************

// -------------------------------------
//   Modules
// -------------------------------------

var gulp       = require( 'gulp' );
var coffee     = require( 'gulp-coffee' );
var coffeelint = require( 'gulp-coffeelint' );
var es         = require( 'event-stream' );
var gutil      = require( 'gulp-util' );
var watch      = require( 'gulp-watch' );

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  coffee : {
    files       : [ 'components/*.coffee', 'spec/*.coffee' ],
    destination : [ 'components/js/', 'spec/javascripts/' ]
  },

  watch : function() {
    return this.coffee.files;
  }

};

// -------------------------------------
//   Task: Default
// -------------------------------------

gulp.task( 'default', function() {

  watch( options.watch(), function( files ) {

    gulp.start( 'coffee' );

  } );

} );

// -------------------------------------
//   Task: Coffee
// -------------------------------------

gulp.task( 'coffee', function() {

  var components = gulp.src( options.coffee.files[0] )
    .pipe( coffee( { bare: true } ).on( 'error', gutil.log ) )
    .pipe( gulp.dest( options.coffee.destination[0] ) );

  var tests = gulp.src( options.coffee.files[1] )
    .pipe( coffee( { bare: true } ).on( 'error', gutil.log ) )
    .pipe( gulp.dest( options.coffee.destination[1] ) );

  return es.concat(components, tests);

} );

// -------------------------------------
//   Task: Lint
// -------------------------------------

gulp.task( 'lint', function () {

  gulp.src( options.coffee.files[0] )
      .pipe( coffeelint() )
      .on( 'error', function( error ) { console.log( error.message ); } )
      .pipe( coffeelint.reporter( ) )

} );
