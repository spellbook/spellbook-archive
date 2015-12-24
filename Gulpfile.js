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
var connect    = require( 'gulp-connect' );
var es         = require( 'event-stream' );
var gutil      = require( 'gulp-util' );
var rename     = require( 'gulp-rename' );
var uglify     = require( 'gulp-uglify' );
var watch      = require( 'gulp-watch' );
var run        = require( 'run-sequence' );

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  default : {
    tasks : [ 'build', 'connect', 'watch' ]
  },

  build : {
    files                : [ 'compendium/js/*.js', 'components/js/**/*.js' ],
    destinationFile      : 'spellbook.js',
    destinationDirectory : 'build/'
  },

  coffee : {
    files           : [ 'compendium/spellbook.coffee', 'components/**/*.coffee', 'test/source/*.coffee' ],
    destination     : [ 'compendium/js/', 'components/js/', 'test' ],
    destinationFile : 'test.js'
  },

  connect : {
    port : 9000,
    base : 'http://localhost',
    root : './'
  },

  watch : {
    files : function() {
      return [
        options.coffee.files
      ]
    },
    run : function() {
      return [
        [ 'build' ]
      ]
    }
  }

};

// -------------------------------------
//   Task: Default
// -------------------------------------

gulp.task( 'default', options.default.tasks );

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task( 'build', function() {

  run( 'coffee', 'concat', 'uglify' );

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
    .pipe( concat( options.coffee.destinationFile ) )
    .pipe( gulp.dest( options.coffee.destination[2] ) );

  return es.concat(compendium, components, tests);

} );

// -------------------------------------
//   Task: Connect
// -------------------------------------

gulp.task( 'connect', function() {

  connect.server( {
    root       : [ options.connect.root ],
    port       : options.connect.port,
    base       : options.connect.base,
    livereload : true
  } );

});

// -------------------------------------
//   Task: Concat
// -------------------------------------

gulp.task( 'concat', function() {

  gulp.src( options.build.files )
    .pipe( concat( options.build.destinationFile ) )
    .pipe( gulp.dest( options.build.destinationDirectory ) );

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

// -------------------------------------
//   Task: Watch
// -------------------------------------

gulp.task( 'watch', function() {

  var watchFiles = options.watch.files();

  watchFiles.forEach( function( files, index ) {
    gulp.watch( files, options.watch.run()[ index ]  );
  } );

});
