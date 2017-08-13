const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create(),
uglify = require ('gulp-uglify'),
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
prettier = require('gulp-prettier');

// Default task that runs on 'Gulp' command

gulp.task('default', ['cssInject', 'compilecss', 'watch']);


gulp.task('watch', function(){
    browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});


// Watch CSS for changes and inject compiled and minified CSS

watch('app/assets/styles/**/*.css', function(){
gulp.start('cssInject');
});


// Live reload browserSync
watch('app/index.html', function(){
  browserSync.reload();
});

// Compile CSS
gulp.task('compilecss', function(){

  return gulp.src('app/assets/styles/styles.css')
  .pipe(debug())
  .pipe(postcss([cssImport, autoprefixer, mixins, nested, cssvars]))
  .pipe(gulp.dest('app/temp/assets/styles'))

});

// Lint CSS



// Injects compiled CSS into page
gulp.task('cssInject', ['compilecss'], function(){
  return gulp.src('app/assets/styles/styles.css')
  .pipe(browserSync.stream());

});

// Webpack
// gulp.task('bundle', function(callback){
//  webpack(require('./webpack.config.js'), function(err, stats){
//    if(err) {
//      console.log(err.toString());
//    }
//    console.log(stats.toString());
//    callback();
//    });
//  });

watch('app/assets/scripts/app.js', function(){
  browserSync.reload();
});

gulp.task('prettier', () => {
    gulp.src('assets/scripts/app.js')
    .pipe(prettier({useFlowParser: true}))
    .pipe(gulp.dest('assets/scripts/app.js'))
});

watch('app/assets/scripts/app.js', function(){
  gulp.start('prettier');
  gulp.start('compressScripts');
});

// rebundle scripts when changes are made
// watch('app/assets/scripts/**/*.js', function(){
//   gulp.start('rebundle');
// });

// Reload browsersync
// gulp.task('rebundle', ['bundle'], function(){
//  browserSync.reload();
//  });

// Optimise images
gulp.task('optimiseImages', function(){
return gulp.src('app/assets/images/**/*')
.pipe(imagemin({
  progressive: true,
  interlaced: true,
  multipass: true
}))
.pipe(gulp.dest('docs/assets/images'));
});

// Delete Dist folder before recreating
gulp.task('deleteDistFolder', function(){
  return del('./docs');
})

gulp.task('babel', () => {
    return gulp.src('app/assets/scripts/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/assets/scripts/babel'));
});

// Minify Javascript
gulp.task('compressScripts', ['babel', 'deleteDistFolder'], function(){
 return gulp.src('app/assets/scripts/babel/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('app/temp/assets/scripts/min'));
});

// Grab any other files
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images',
    '!./app/assets/styles/styles.css',
    '!./app/assets/styles/base',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

// Build final
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'usemin']);

// Usemin
gulp.task('usemin', ['deleteDistFolder', 'compilecss'], function(){
  return gulp.src('app/index.html')
  .pipe(usemin({
    css: [function(){return rev()},
    function(){return cssNano()}],
    js: [function() {return rev()}, function() {return uglify()
      .pipe(debug())
    }]
  }))

  .pipe(gulp.dest('docs'));
});

// Preview final build in browserSync
gulp.task('testBuild', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});
