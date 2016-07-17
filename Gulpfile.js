var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
	browsers: ['> 2%']
};


//Gulp tasks
gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});
gulp.task('sass', function() {
	return gulp.src('assets/sass/*.sass')
			   .pipe(sass().on('error', sass.logError))
			   .pipe(autoprefixer(autoprefixerOptions))
			   .pipe(cssmin())
			   .pipe(rename({suffix: '.min'}))
			   .pipe(gulp.dest('assets/cssmin/'))
			   .pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('assets/sass/*.sass', ['sass', browserSync.reload ]);
});