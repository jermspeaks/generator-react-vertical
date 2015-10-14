'use strict';

var generators = require('yeoman-generator'),
	mkdirp = require('mkdirp'),
  yosay = require('yosay'),
  chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
			sourceRoot = this.sourceRoot(),
      // TODO create folder?
      appDir = destRoot + '/app',
      templateContext = {
        appName: this.appName,
        appDescription: this.appDescription,
        appVersion: this.appVersion,
        appLicense: this.appLicense,
        appAuthor: this.appAuthor,
        appEmail: this.appEmail,
      };

    mkdirp(appDir + '/src');
    mkdirp(appDir + '/tools');
    mkdirp(appDir + '/tests');

    this.fs.copy(sourceRoot + '/.babelrc', destRoot + '/.babelrc');
    this.fs.copy(sourceRoot + '/.csscomb.json', destRoot + '/.csscomb.json');
    this.fs.copy(sourceRoot + '/.csslintrc', destRoot + '/.csslintrc');
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.eslintrc', destRoot + '/.eslintrc');
    this.fs.copy(sourceRoot + '/.flowconfig', destRoot + '/.flowconfig');
    this.fs.copy(sourceRoot + '/.jscsrc', destRoot + '/.jscsrc');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');
    this.fs.copy(sourceRoot + '/.scss-lint.yml', destRoot + '/.scss-lint.yml');
    this.fs.copy(sourceRoot + '/.travis.yml', destRoot + '/.travis.yml');
    this.fs.copyTpl(sourceRoot + '/license.txt', destRoot + '/license.txt', templateContext);
    this.fs.copy(sourceRoot + '/preprocessor.js', destRoot + '/preprocessor.js');
    this.fs.copyTpl(sourceRoot + '/package.json', destRoot + '/package.json', templateContext);
    this.fs.copyTpl(sourceRoot + '/README.md', destRoot + '/README.md', templateContext);
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

  prompting: function() {
    var done = this.async();

    this.prompt(this._getPrompts(), function(answers) {
      this._saveAnswers(answers, done);
    }.bind(this));

  },

  configuring: function() {
    this.config.save();
  },

  writing: function() {
    this._createProjectFileSystem();
  },

  install: function() {
    this.npmInstall();
  },
});
