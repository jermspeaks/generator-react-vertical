'use strict';

var generators = require('yeoman-generator'),
	mkdirp = require('mkdirp'),
  yosay = require('yosay');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
			sourceRoot = this.sourceRoot(),
			appDir = destRoot + '/app';

    mkdirp(appDir + '/scripts');
    mkdirp(appDir + '/img');

    this.fs.copy(sourceRoot + '/.bowerrc', destRoot + '/.bowerrc');
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');
    this.fs.copy(sourceRoot + '/bower.json', destRoot + '/bower.json');
    this.fs.copy(sourceRoot + '/CONTRIBUTING.md', destRoot + '/CONTRIBUTING.md');
    this.fs.copy(sourceRoot + '/humans.txt', appDir + '/humans.txt');
    this.fs.copy(sourceRoot + '/package.json', destRoot + '/package.json');
    this.fs.copy(sourceRoot + '/README.md', destRoot + '/README.md');
    this.fs.copy(sourceRoot + '/robots.txt', appDir + '/robots.txt');
  },

  initializing: function() {
    this.log(yosay('Welcome to React-Vertical Project'));
  },

  configuring: function() {
    this.config.save();
  },

  writing: function() {
    this._createProjectFileSystem();
  },

  install: function() {
    this.npmInstall();
    this.bowerInstall();
  },
});
