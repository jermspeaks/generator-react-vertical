var gulp = require('gulp');
var bump = require('gulp-bump'); // Bumps Version of App

/**
 * Bump Version for patch release
 * @param {string}  feature   Semantic type version (i.e. major or minor)
 */
function bumpVersion(feature) {
  var config = {};

  // If we pass major or minor as string, add it to configuration
  if (feature) {
    config.type = feature;
  }

  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump(config))
    .pipe(gulp.dest('./'));

  // IDEA https://www.npmjs.com/package/gulp-tag-version
}

// Bump version patch
gulp.task('bump', function() {
  return bumpVersion();
});

// Bump version major
gulp.task('bump-major', function() {
  return bumpVersion('major');
});

// Bump version minor
gulp.task('bump-minor', function() {
  return bumpVersion('minor');
});
