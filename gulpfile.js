/*\
|| includeing requred files 
||
\*/
var 
    gulp = require("gulp"),
    sass = require('gulp-sass'),
    sourceMaps = require("gulp-sourcemaps"),
    ts =  require("gulp-typescript"),
    merge   =   require('merge2'),
    plumber = require('gulp-plumber')
    // liveReload = require( 'gulp-livereload')
    
    dirLs = {
        'scss'      : 'asset/scss/**/**.scss',
        'tsc'       : 'asset/ts/**/**.ts',
        'typings'   : 'typings',
        'build'     : 'inc'
    }
;

gulp.task('tst' , function(){
    console.log( 'all looks good !' ); 
});
/// short-hand methods
gulp.task("all" , [ 'tsc' , 'scss' ]);
gulp.task("all-w" , [ 'tsc-w' , 'scss-w' ]);
gulp.task("scss-w" , ['scss'] , function(){ gulp.watch( dirLs.scss , ['scss'] ); });
gulp.task("tsc-w" , ['tsc'] , function(){ gulp.watch( dirLs.scss , ['tsc'] ); });


///> scss 
gulp.task('scss', function() {
    gulp.src(dirLs.scss)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourceMaps.write("./map"))
    .pipe(gulp.dest(dirLs.build + '/css'))
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
        tSrc.js.pipe(sourceMaps.write("./map"))
        .pipe(gulp.dest(dirLs.build + '/inc/js'))
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