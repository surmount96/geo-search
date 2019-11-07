const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('sass',(done) => {
    done();
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});


gulp.task('processJS', (done) => {
    done();
   return gulp.src('src/js/*.js')
    .pipe(jshint({
        esversion: 8
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/js'));
});


gulp.task('babel-polyfill', (done) => {
    done();
    return gulp.src('node_modules/babel-polyfill/browser.js')
        .pipe(gulp.dest('src/dist/node_modules/'));
});

gulp.task('serve',(done) => {
    done();
    browserSync.init({
        server:'./src',
        port: 8080,
        ui: {
            port:8081
        }
    });

    gulp.watch(['src/index.html','src/scss/*.scss'],gulp.series(['sass'])).on('change',browserSync.reload);
});


gulp.task('default',gulp.series('sass','processJS','babel-polyfill','serve'),(done) => {
    done();
});