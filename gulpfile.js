var gulp    = require('gulp');
    coffee  = require('gulp-coffee'),
    gutil   = require('gulp-util'),
    watch   = require('gulp-watch'),
    es      = require('event-stream');

var srcFiles  = 'components/*.coffee';
var specFiles = 'test/spec/*.coffee';

gulp.task('default', function() {
  watch([srcFiles, specFiles], function(files) {
    gulp.start('coffee');
  });
});

gulp.task('coffee', function() {
  var components = gulp.src(srcFiles)
    .pipe( coffee({ bare: true }).on('error', gutil.log) )
    .pipe( gulp.dest('components/js/') );

  var tests = gulp.src(specFiles)
    .pipe( coffee({ bare: true }).on('error', gutil.log) )
    .pipe( gulp.dest('test/spec/js/') );

  return es.concat(components, tests);
});

