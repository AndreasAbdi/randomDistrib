const gulp = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('vendor-bundle', function() {
	gulp.src([
			'node_modules/es6-shim/es6-shim.min.js',
			'node_modules/systemjs/dist/system-polyfills.js',
			'node_modules/angular2/bundles/angular2-polyfills.js',
			'node_modules/systemjs/dist/system.src.js',
			'node_modules/rxjs/bundles/Rx.js',
			'node_modules/angular2/bundles/angular2.dev.js',
			'node_modules/angular2/bundles/http.dev.js',
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/chart.js/dist/Chart.bundle.min.js'
		])
		.pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});