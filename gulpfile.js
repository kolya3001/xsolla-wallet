var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var Server = require('karma').Server;
var autoprefixer = require('gulp-autoprefixer');
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
            middleware: [historyApiFallback()]
        },
        open: false
    });
});

gulp.task('test', function (done) {
   new Server({
     configFile: require('path').resolve('karma.conf.js'),
     singleRun: true
   }, done).start();
 });

gulp.task('browserify', function() {
    return browserify(source + '/app.js')
        .bundle()
        .pipe(sourceV('main.js'))
        .pipe(gulp.dest(dest + '/js/'))
        .pipe(bs.reload({
            stream: true
        }));
})


gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            includePaths: [ '/sass/main.scss', './node_modules/bootstrap-sass/assets/stylesheets']
        }))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest(dest + '/css'));
});



gulp.task('html', function() {
    gulp.src(source + 'templates/*.html')
        .pipe(gulp.dest(dest + 'templates/'))
        .pipe(bs.reload({
            stream: true
        }));

    gulp.src(source + 'pages/*.html')
        .pipe(gulp.dest(dest + 'pages/'))
        .pipe(bs.reload({
            stream: true
        }));

    return gulp.src(source + 'index.html')
        .pipe(gulp.dest(dest))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('vendor', function() {

    //jquery
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(dest + '/vendor/jquery/'));

    // bootstrap js
    gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
        .pipe(gulp.dest(dest + '/vendor/bootstrap/'));

    // moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(dest + '/vendor/moment/'));

    //fonts
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(gulp.dest(dest + '/fonts/bootstrap/'));

    //ui-bootstrap
    gulp.src('node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js')
        .pipe(gulp.dest(dest + '/vendor/ui-bootstrap/'));


});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify'])
    gulp.watch('sass/*.scss', ['sass'])
    gulp.watch(['app/index.html', 'app/templates/*.html', 'app/pages/*.html'], ['html'])

})

gulp.task('default', ['browserify', 'sass', 'html', 'vendor', 'watch', 'test','browser-sync' ])
