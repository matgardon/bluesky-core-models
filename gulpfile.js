'use strict';

var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    del = require('del'),
    merge = require('merge2'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate');

var tsProject = ts.createProject('tsconfig.json');

var tsSrc = 'src/**/*.ts',
    tsExternalDefinitions = 'typings/**/*.d.ts';

gulp.task('clean', function () {
    // delete the files
    return del.sync(['dist/**']);
});

//TODO MGA: fix ts-lint task
gulp.task('ts-lint', function () {
    return gulp.src([tsSrc])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
    //return gulp.src(tsSrc).pipe(tslint({ configuration: require("./tslint.json")})).pipe(tslint.report('prose'));
});

gulp.task('compile-ts', ['clean'], function () {
    var tsResults = gulp.src([tsSrc, tsExternalDefinitions])
        // .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        // .pipe(ts(tsProject));
        .pipe(tsProject())
               //.dts.pipe(concat('bluesky-core-models.d.ts'))
               //.pipe(gulp.dest('dist'));

    return merge([
        tsResults.dts.pipe(concat('bluesky-core-models.d.ts'))
                     .pipe(gulp.dest('dist')),

        tsResults.js.pipe(concat('bluesky-core-models.js'))
                    // .pipe(ngAnnotate())//TODO MGA : check if it breaks sourcemaps ?

                    //TODO MGA: leave concatenation & minification to consumer apps
                    //.pipe(uglify()) //Uncomment to activate minification
                    // .pipe(sourcemaps.write())// Now the sourcemaps are added to the .js file //TODO MGA: sourcemaps keeps track of original .ts files + the concatenated .js file : how to only have the 2 original ts files ?
                    //.pipe(rename({ suffix: '.min' }))
                    .pipe(gulp.dest('dist'))
    ]);
});

//TODO MGA: fix ts-lint step
gulp.task('default', ['clean', 'compile-ts']);
//gulp.task('default', ['ts-lint', 'clean-ts', 'compile-ts']);
