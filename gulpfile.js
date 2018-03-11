/*\
|| includeing requred files 
||
\*/
var 
    gulp = require("gulp"),
    sass = require('gulp-sass'),
    pug = require("gulp-pug"),
    sourceMaps = require("gulp-sourcemaps"),
    ts =  require("gulp-typescript"),
    merge   =   require('merge2'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin')
    // liveReload = require( 'gulp-livereload')
    
    dirLs = {
        'scss'      : 'asset/scss/**/**.scss',
        'tsc'       : 'asset/ts/**/**.ts',
        'typings'   : 'typings'
    }
;
///> scss 
gulp.task('scss', function() {
    gulp.src(dirLs.scss)
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(dirLs.build + '/inc/css'))
});
///> typesctip compiling 
gulp.task('tsc', function() {
    var 
        tSrc = gulp.src(dirLs.tsc)
        .pipe(sourceMaps.init())
                .pipe(ts({
                    declaration: true,
                    removeComments:true
                })
        );
    return merge([
        tSrc.dts.pipe(gulp.dest(dirLs.typings + "/cust")),
        tSrc.js.pipe(sourceMaps.write("./map")).pipe(gulp.dest(dirLs.build + '/inc/js'))
    ]);
});

//> libs to move 
gulp.task('sftLib', function() {
    gulp.src([
        // name what to move : exact locations of files ( move item )
        ''
    ])
      .pipe(gulp.dest(dirLs.build + '/libs/inc'))//move to
});