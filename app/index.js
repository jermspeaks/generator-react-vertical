'use strict';

var generators = require('yeoman-generator'),
	mkdirp = require('mkdirp'),
  yosay = require('yosay'),
  chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
			sourceRoot = this.sourceRoot(),
			appDir = destRoot + '/app',
      sassFileExtension = (this.options.sass) ? '.sass' : '.scss',
      templateContext = {
        appName: this.appName,
        appDescription: this.appDescription,
        appVersion: this.appVersion,
        appLicense: this.appLicense,
        appAuthor: this.appAuthor,
        appEmail: this.appEmail,
      };

    mkdirp(appDir + '/scripts');
    mkdirp(appDir + '/img');
		mkdirp(appDir + '/sass');

    this.fs.copy(sourceRoot + '/.bowerrc', destRoot + '/.bowerrc');
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');
    this.fs.copyTpl(sourceRoot + '/bower.json', destRoot + '/bower.json', templateContext);
    this.fs.copy(sourceRoot + '/CONTRIBUTING.md', destRoot + '/CONTRIBUTING.md');
    this.fs.copy(sourceRoot + '/humans.txt', appDir + '/humans.txt');
    this.fs.copyTpl(sourceRoot + '/package.json', destRoot + '/package.json', templateContext);
    this.fs.copyTpl(sourceRoot + '/README.md', destRoot + '/README.md', templateContext);
    this.fs.copy(sourceRoot + '/robots.txt', appDir + '/robots.txt');

    this.fs.copyTpl(sourceRoot + '/sass/_vars' + sassFileExtension, appDir + '/sass/_vars' + sassFileExtension, templateContext);
    this.fs.copyTpl(sourceRoot + '/sass/_name-space' + sassFileExtension, appDir + '/sass/_name-space' + sassFileExtension, templateContext);
    this.fs.copyTpl(sourceRoot + '/sass/host' + sassFileExtension, appDir + '/sass/host' + sassFileExtension, templateContext);
  },

  _getPrompts: function() {
    var prompts = [{
      name: 'name',
      message: 'What is the name of your project?',
      default: 'react-flux-starter',
    }, {
      name: 'description',
      message: 'What is the description of your project?',
    }, {
      name: 'version',
      message: 'What is the version of your project?',
      default: '0.0.0',
    }, {
      name: 'license',
      message: 'How is your project licensed?',
      default: 'MIT',
    }, {
      name: 'author',
      message: 'What is your name?',
    }, {
      name: 'email',
      message: 'What is your email address?',
    }];

    return prompts;
  },

  _saveAnswers: function(answers, callback) {
    this.appName = answers.name;
    this.appDescription = answers.description;
    this.appVersion = answers.version;
    this.appLicense = answers.license;
    this.appAuthor = answers.author;
    this.appEmail = answers.email;
    callback();
  },

  // constructor: function() {
  //   generators.Base.apply(this, arguments);
	//
  //   this.option('sass', {
  //     desc: 'Use classic SASS syntax instead of SCSS',
  //   });
	//
  //   this.log(this.options.test);
  // },

  initializing: function() {
    var message = chalk.bgBlack.bold('\nWelcome to React-Vertical Project\n') + chalk.underline('JS React/Flux Compiler\n');
    this.log(yosay(message));

    this.log(chalk.bold('\nMain Generator is a WIP. For now, please user the subgenerator\n'));
    this.log('\nyo react-vertical:module #{moduleName}\n');
  },

  // prompting: function() {
  //   var done = this.async();
	//
  //   this.prompt(this._getPrompts(), function(answers) {
  //     this._saveAnswers(answers, done);
  //   }.bind(this));
	//
  // },
	//
  // configuring: function() {
  //   this.config.save();
  // },
	//
  // writing: function() {
  //   this._createProjectFileSystem();
  // },
	//
  // install: function() {
  //   this.npmInstall();
  //   this.bowerInstall();
  // },
});
