var gulp    = require( 'gulp' ),
    eslint  = require( 'gulp-eslint' ),
    rename  = require( 'gulp-rename' ),
    uglify  = require( 'gulp-uglify' );

gulp.task( 'default', function() {});

/**
 * Lint
 */
gulp.task( 'lint', function() {

  return gulp.src( ['scripts/*.js', '!node_modules/**'])
    .pipe( eslint({
      extends : 'eslint:recommended',
      'globals' : {
        'define' : true,
        'document' : true,
        'window' : true
      }
    }) )
    .pipe( eslint.format() )
    .pipe( eslint.failAfterError() );
});

/**
 * Uglify
 */
gulp.task( 'compress', function() {
  return gulp.src( ['scripts/*.js', '!node_modules/**'] )
    .pipe( uglify() )
    .pipe( rename({
      suffix : '.min'
    }) )
    .pipe( gulp.dest( 'scripts/min' ) );
});
