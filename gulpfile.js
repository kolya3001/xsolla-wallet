
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var bs = require('browser-sync').create();
var browserify = require('browserify');
var historyApiFallback = require('connect-history-api-fallback');
var source = require('vinyl-source-stream');

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./public",
            middleware: [ historyApiFallback() ]
        }
    });
});

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'))
        .pipe(bs.reload({stream: true}));
})

gulp.task('sass', function() {
  return sass('sass/**/*.sass', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./public/css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('html', function() {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./public/'))
        .pipe(bs.reload({stream: true}));
});

gulp.task('templates', function(){
    return gulp.src('./app/templates/*.html')
        .pipe(gulp.dest('./public/templates/'))
        .pipe(bs.reload({stream: true}));
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('sass/style.sass', ['sass'])
  gulp.watch('app/index.html', ['html'])
  gulp.watch('app/templates/*.html', ['templates'])
})

gulp.task('default', ['browserify','sass', 'html', 'templates', 'browser-sync', 'watch'])
