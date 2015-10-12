'use strict';

var generators = require('yeoman-generator'),
	mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
	createProjectFileSystem: function() {
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
    this.fs.copy(sourceRoot + '/humans.txt', destRoot + '/humans.txt');
		this.fs.copy(sourceRoot + '/README.md', destRoot + '/README.md');
		this.fs.copy(sourceRoot + '/robots.txt', destRoot + '/robots.txt');
	}
});
