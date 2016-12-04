const gulp = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('src-bundle', function () {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript'),
    outFile: 'src.js'
  });

  var tsResult = gulp.src('src/**/*.ts')
                   .pipe(ts(tsProject));

  return tsResult.js.pipe(concat('src.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('./dist'));
});