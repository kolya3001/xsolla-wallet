
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var bs = require('browser-sync').create();
var browserify = require('browserify');
var historyApiFallback = require('connect-history-api-fallback');
var sourceV = require('vinyl-source-stream');

// source and distribution folder
var
    source = 'app/',
    dest = 'public/';

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./public",
            middleware: [ historyApiFallback() ]
        }
    });
});

gulp.task('browserify', function() {
    return browserify(source+'/app.js')
        .bundle()
        .pipe(sourceV('main.js'))
        .pipe(gulp.dest(dest+'/js/'))
        .pipe(bs.reload({stream: true}));
})

gulp.task('sass', function() { 
            return sass('sass/main.scss', {
             style: 'compressed',
             loadPath: [
                 '/sass/main.scss',
                 './node_modules/bootstrap-sass/assets/stylesheets'
             ]
         }) 
        .pipe(autoprefixer('last 2 version'))
         .pipe(gulp.dest('./public/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css'))
        .pipe(gulp.dest(dest+'/css'))
        .pipe(bs.reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src(source+'templates/*.html')
      .pipe(gulp.dest(dest+'templates/'))
      .pipe(bs.reload({stream: true}));

    return gulp.src(source+'index.html')
        .pipe(gulp.dest(dest))
        .pipe(bs.reload({stream: true}));
});

gulp.task('vendor', function() {

    // moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(dest + '/vendor/moment/'));

});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('sass/*.scss', ['sass'])
  gulp.watch(['app/index.html','app/templates/*.html'], ['html'])

})

gulp.task('default', ['browserify','sass', 'html', 'vendor', 'browser-sync', 'watch'])
