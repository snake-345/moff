var gulp = require('gulp');
var transpiler = require('gulp-es6-module-transpiler');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('transpile', function() {
	return gulp.src('packages/loader.js')
		.pipe(transpiler({
			formatter: 'bundle'
		}))
		.pipe(concat('moff.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
	return gulp.src('packages/loader.js')
		.pipe(sourcemaps.init())
		.pipe(transpiler({
			formatter: 'bundle'
		}))
		.pipe(concat('moff.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'));
});

gulp.task('tests', function() {
	return gulp.src('tests/unit/*.js')
		.pipe(concat('tests.js'))
		.pipe(gulp.dest('tests'));
});

gulp.task('compile', ['transpile', 'minify']);