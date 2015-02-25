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
var concat     = require( 'gulp-concat' );
var es         = require( 'event-stream' );
var gutil      = require( 'gulp-util' );
var rename     = require( 'gulp-rename' );
var uglify     = require( 'gulp-uglify' );
var watch      = require( 'gulp-watch' );

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  build : {
    files                : [ 'compendium/js/*.js', 'components/js/*.js' ],
    destinationFile      : 'spellbook.js',
    destinationDirectory : 'build/'
  },

  coffee : {
    files       : [ 'compendium/spellbook.coffee', 'components/*.coffee', 'spec/*.coffee' ],
    destination : [ 'compendium/js/', 'components/js/', 'spec/javascripts/' ]
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
//   Task: Build
// -------------------------------------

gulp.task( 'build', function() {

  gulp.src( options.build.files )
    .pipe( concat( options.build.destinationFile ) )
    .pipe( gulp.dest( options.build.destinationDirectory ) );

  gulp.start( 'uglify' );

});

// -------------------------------------
//   Task: Coffee
// -------------------------------------

gulp.task( 'coffee', function() {

  var compendium = gulp.src( options.coffee.files[0] )
    .pipe( coffee( { bare: true } ).on( 'error', gutil.log ) )
    .pipe( gulp.dest( options.coffee.destination[0] ) );

  var components = gulp.src( options.coffee.files[1] )
    .pipe( coffee( { bare: true } ).on( 'error', gutil.log ) )
    .pipe( gulp.dest( options.coffee.destination[1] ) );

  var tests = gulp.src( options.coffee.files[2] )
    .pipe( coffee( { bare: true } ).on( 'error', gutil.log ) )
    .pipe( gulp.dest( options.coffee.destination[2] ) );

  return es.concat(compendium, components, tests);

} );

// -------------------------------------
//   Task: Lint
// -------------------------------------

gulp.task( 'lint', function () {

  gulp.src( options.coffee.files[1] )
      .pipe( coffeelint() )
      .on( 'error', function( error ) { console.log( error.message ); } )
      .pipe( coffeelint.reporter() )

} );

// -------------------------------------
//   Task: Uglify
// -------------------------------------

gulp.task( 'uglify', function () {

  gulp.src( options.build.destinationDirectory + '/' + options.build.destinationFile )
      .pipe( uglify() )
      .pipe( rename( { suffix: '.min' } ) )
      .pipe( gulp.dest( options.build.destinationDirectory ) );

} );
