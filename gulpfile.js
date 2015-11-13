var gulp            = require( 'gulp' );
var sass            = require( 'gulp-sass' );
var autoprefixer    = require( 'gulp-autoprefixer' );
var autoprefixer    = require( 'gulp-autoprefixer' );
var connect         = require( 'gulp-connect' );
var rename          = require( 'gulp-rename' );
var cssmin          = require( 'gulp-cssmin' );

gulp.task( 'styles', function () {
    gulp.src( [
            'scss/one-design-core.scss',
            'scss/one-design.scss'] )
        .pipe( sass( {
                includePaths: [ 'node_modules/' ],
                outputStyle: 'expanded'
            })
            .on( 'error', sass.logError ))
        .pipe( autoprefixer() )
        .pipe( gulp.dest( 'css/' )) // Unminified copy
        .pipe( cssmin() )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( 'css/' )) // Minified copy
        .pipe( connect.reload() );
});

// Run server with livereload
gulp.task( 'serve', [ 'watch' ], function() {
    connect.server({
        root: [__dirname],
        livereload: true
    });
});

// Watch for changes
gulp.task( 'watch', [ 'default' ], function () {
    gulp.watch( 'scss/**/*.scss', [ 'styles' ]);
});

gulp.task( 'default', [ 'styles' ] );
