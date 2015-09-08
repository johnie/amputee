/*------------------------------------*\

  GULPFILE

\*------------------------------------*/

import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import pkg from './package.json';

const $ = gulpLoadPlugins();

/**
 * Config
 */
const pluginName = 'amputee';

const config = {
  src: `./src/${pluginName}.js`,
  dist: `./dist/`
}

/**
 * Banner
 */
var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.description %>\n' +
    ' * <%= package.homepage %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
  ].join('');

/**
 * Clean task
 */
gulp.task('clean', cb => del([ './dist/*' ], {
  read: false,
  dot: true,
  force: true
}, cb));

/**
 * Beautify task
 */
gulp.task('beautify', () => {
  gulp.src([config.src])
    .pipe($.plumber())
    .pipe($.babel())
    .pipe($.eslint())
    .pipe($.uglify({
      mangle: false,
      compress: false,
      output: {
        beautify: true,
        indent_level: 2
      }
    }))
    .pipe($.header(banner, {
      package: pkg
    }))
    .pipe(gulp.dest(config.dist))
    .pipe($.size({title: 'beautify'}));
});

/**
 * Minfify task
 */
gulp.task('minify', () => {
  gulp.src([config.src])
    .pipe($.plumber())
    .pipe($.babel())
    .pipe($.eslint())
    .pipe($.uglify())
    .pipe($.header(banner, {
      package: pkg
    }))
    .pipe($.rename(`${pluginName}.min.js`))
    .pipe(gulp.dest(config.dist))
    .pipe($.size({title: 'minify'}));
});

/**
 * Watch task
 */
gulp.task('watch', () => {
  gulp.watch(config.src, ['beautify', 'minify']);
});

/**
 * Default task
 */
gulp.task('default', ['clean'], cb => {
  runSequence('beautify', 'minify', 'watch', cb);
});

/**
 * Build task
 */
gulp.task('build', ['clean'], cb => {
  runSequence('beautify', 'minify', cb);
});
