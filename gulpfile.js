const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('style', () =>{
    return gulp
        .src(['src/assets/sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task('style-land', () =>{
    return gulp
        .src(['src/app/user-page/land/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/app/user-page/land/'));
});

gulp.task('default', gulp.parallel('style-land'));