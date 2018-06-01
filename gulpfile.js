const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  mixins = require('postcss-mixins'),
  browserSync = require('browser-sync').create(),
  uglify = require('gulp-uglify'),
  cssNano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  imageminJPEG = require('imagemin-jpeg-recompress'),
  cssImport = require('postcss-import'),
  usemin = require('gulp-usemin'),
  babel = require('gulp-babel'),
  es2015 = require('babel-preset-es2015'),
  del = require('del'),
  debug = require('gulp-debug'),
  rev = require('gulp-rev'),
  beautify = require('gulp-jsbeautify'),
  webpack = require('webpack'),
  stylelint = require('gulp-stylelint'),
  prettier = require('gulp-prettier'),
  swPrecache = require('sw-precache');

// Default task that runs on 'Gulp' command
gulp.task('default', [ 'cssInject', 'compilecss', 'watch' ]);

gulp.task('watch', function() {
  browserSync.init({ server: { baseDir: 'app' } });
});

// Watch CSS for changes and inject compiled and minified CSS
watch('app/assets/styles/**/*.css', function() {
  gulp.start('cssInject');
});

gulp.task('create-service-worker', [ 'deploy' ], function() {
  var dir = 'docs';
  swPrecache.write(`${dir}/sw.js`, {
    staticFileGlobs: [
      dir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
    ],
    stripPrefix: dir,
  });
});

// Live reload browserSync
watch('app/index.html', function() {
  browserSync.reload();
});

// Compile CSS
gulp.task('compilecss', function() {
  return gulp.src('app/assets/styles/styles.css').on('error', function() {
    console.log('Caught an error');
  }).pipe(
    debug(),
  ).pipe(postcss([ cssImport, autoprefixer, mixins, nested, cssvars ])).on('error', function(err) {
    console.log('Caught an error', err);
  }).pipe(gulp.dest('app/temp/assets/styles'));
});

// Lint CSS
// Injects compiled CSS into page
gulp.task('cssInject', [ 'compilecss' ], function() {
  return gulp.src('app/assets/styles/styles.css').pipe(browserSync.stream());
});

watch('app/**/*.js', function() {
  browserSync.reload();
});

watch('app/assets/scripts/*.js', function() {
  gulp.start('compressScripts');
});

gulp.task('optimiseImages', function() {
  return gulp
    .src('app/assets/images/**/*')
    .pipe(debug())
    .pipe(imagemin({ progressive: true, interlaced: true, multipass: true }))
    .pipe(gulp.dest('docs/assets/images'));
});

// Delete Dist folder before recreating
gulp.task('deleteDistFolder', function() {
  return del('./docs');
});

gulp.task('babel', () => {
  return gulp
    .src('app/assets/scripts/*.js')
    .pipe(babel({ presets: [ 'es2015' ] }))
    .pipe(gulp.dest('app/assets/scripts'));
});

// Minify Javascript
gulp.task('compressScripts', [ 'babel', 'deleteDistFolder' ], function() {
  return gulp
    .src('app/assets/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/temp/assets/scripts'));
});

// Grab any other files
gulp.task('copyGeneralFiles', [ 'deleteDistFolder' ], function() {
  var pathsToCopy = [
    './app/**/*',
    './app/assets/scripts/vendor/**/*',
    '!./app/assets/scripts/babel/**/*',
    '!./app/assets/scripts/min',
    '!./app/assets/scripts/*.js',
    '!./app/index.html',
    '!./app/assets/images',
    '!./app/assets/styles/**/*',
    '!./app/temp',
    '!./app/temp/**/*',
  ];

  return gulp.src(pathsToCopy).pipe(debug()).pipe(gulp.dest('./docs'));
});

// Build final
gulp.task('deploy', [
  'deleteDistFolder',
  'optimiseImages',
  'copyGeneralFiles',
  'usemin',
]);

// Usemin
gulp.task('usemin', [ 'deleteDistFolder', 'compilecss' ], function() {
  return gulp.src('app/index.html').pipe(
    usemin({
      css: [
        function() {
          return rev();
        },
        function() {
          return cssNano();
        },
      ],
      js: [
        function() {
          return rev();
        },
        function() {
          return uglify().pipe(debug());
        },
      ],
    }),
  ).pipe(gulp.dest('docs'));
});

// Preview final build in browserSync
gulp.task('runDeploy', [ 'create-service-worker' ], function() {
  browserSync.init({ notify: false, server: { baseDir: 'docs' } });
});
