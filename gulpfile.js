var gulp = require('gulp')
var pug = require('gulp-pug')
const watch = require('gulp-watch')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var data = require('gulp-data')
var fs = require('fs')

gulp.task('pug', function() {
    return gulp.src('layout/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: false
     }))
     .pipe(data(function(file) {
         return hr = JSON.parse(fs.readFileSync('./assets/json/hr.json'))
     }))
     .pipe(gulp.dest('source'))
})

gulp.task('assets', function () {
    return gulp.src('assets/**/**')
        .pipe(gulp.dest('source/'))
})

gulp.task('webserver', function () {
    connect.server ({
        root: ['source/'],
        livereload: true,
        port: 8000,
        host: '127.0.0.1'
    })
})

gulp.task('sass', function () {
	return gulp.src('sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('source/css/'))
})


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass'])
    gulp.watch('layout/**/*.pug', ['pug'])
})

gulp.task('default', ['sass', 'assets', 'pug'])
gulp.task('dev', ['default', 'watch'])
