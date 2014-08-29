var gulp    = require('gulp');
    coffee  = require('gulp-coffee'),
    gutil   = require('gulp-util'),
    watch   = require('gulp-watch'),
    es      = require('event-stream');

gulp.task('default', function() {
  watch(['components/*.coffee', 'tests/spec/*.coffee'], function(files) {
    gulp.start('coffee');
  });
});

gulp.task('coffee', function() {
  var components = gulp.src('components/*.coffee')
    .pipe( coffee({ bare: true }).on('error', gutil.log) )
    .pipe( gulp.dest('components/js/') );

  var tests = gulp.src('tests/spec/*.coffee')
    .pipe( coffee({ bare: true }).on('error', gutil.log) )
    .pipe( gulp.dest('tests/spec/js/') );

  return es.concat(components, tests);
});

