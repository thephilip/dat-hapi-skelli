
var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

gulp.task('compile', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('copyJson', function() {
	return gulp.src('src/**/*.json')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['compile']);
	gulp.watch('src/**/*.html', ['copyHtml']);
	gulp.watch('src/**/*.json', ['copyJson']);
});

gulp.task('start', function() {
	nodemon({
		watch: 'dist',
		script: 'dist/server.js',
		ext: 'js',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('default', function(callback) {
	sequence(['compile', 'watch', 'copyHtml', 'copyJson'], 'start', callback);
});
