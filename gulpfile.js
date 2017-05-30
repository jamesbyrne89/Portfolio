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
beautify = require('gulp-jsbeautify');

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

watch('app/assets/styles/*.css', function(){
gulp.start('cssInject');
});

// Watch JS for changes and beautify

//watch('app/assets/scripts/*.js', function(){
//gulp.start('beautify');
//});

// JS beautifer

//gulp.task('beautify', function() {
  //return gulp.src('app/assets/scripts/app.js')
  //  .pipe(beautify({indentSize: 2}))
   // .pipe(gulp.dest('app/assets/scripts/app.js'));
//});

// Live reload browserSync

watch('app/index.html', function(){
  browserSync.reload();
});

watch('app/projects/**/index.html', function(){
  browserSync.reload();
});


// Compile CSS
gulp.task('compilecss', function(){

  return gulp.src('app/assets/styles/styles.css')
  .pipe(debug())
  .pipe(postcss([cssImport, autoprefixer, mixins, nested, cssvars]))
  .pipe(gulp.dest('app/temp/assets/styles'))

});

// Injects compiled CSS into page

gulp.task('cssInject', ['compilecss'], function(){
  return gulp.src('app/assets/styles/styles.css')
  .pipe(browserSync.stream());

});



// Optimise images
gulp.task('optimiseImages', function(){
return gulp.src('app/assets/images/**/*')
.pipe(imagemin({
  progressive: true,
  interlaced: true,
  multipass: true
}))
.pipe(gulp.dest('dist/assets/images'));
});

// Delete Dist folder before recreating
gulp.task('deleteDistFolder', function(){
  return del('./dist');
})

gulp.task('babel', () => {
    return gulp.src('app/assets/scripts/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/temp/assets/scripts/babel'));
});

// Minify Javascript
gulp.task('compressScripts', ['babel', 'deleteDistFolder'], function(){
 return gulp.src('app/temp/assets/scripts/babel/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/assets/scripts'));
});

// Grab any other files

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    './app/assets/scripts/vendor',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/styles.css',
    '!./app/assets/styles/base',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
});

// Build final

gulp.task('build', ['deleteDistFolder', 'compressScripts', 'copyGeneralFiles', 'optimiseImages', 'usemin']);

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

  .pipe(gulp.dest('dist'));
});

// Preview final build in browserSync
gulp.task('testBuild', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});
