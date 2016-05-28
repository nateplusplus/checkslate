var gulp = require('gulp'),
	rename = require('gulp-rename'),
	del = require('del'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	cssnano = require('gulp-cssnano');

gulp.task('compileSass', function() {
	return gulp.src('css/sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch('css/sass/**/**', ['compileSass']);
});

gulp.task('minifyCss', ['compileSass'], function() {
	return gulp.src('css/app.css')
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(rename('app.min.css'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('css'));
});

gulp.task('clean', function() {
	return del([
		'dist/',
		'css/app.css',
		'css/app.min.css',
		'css/maps/'
	]);
});

gulp.task('build', ['minifyCss'], function(){
  return gulp.src(['index.html', 'fonts/**', 'partials/**', 'css/app.min.css', 'js/**'], {base: './'})
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});
