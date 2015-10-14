'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot();
    var sourceRoot = this.sourceRoot();
    var appDir = destRoot + '/src';
    var toolDir = destRoot + '/tools';
    var testDir = destRoot + '/tests';
    var templateContext = {
      appName: this.appName,
      appDescription: this.appDescription,
      appVersion: this.appVersion,
      appLicense: this.appLicense,
      appAuthor: this.appAuthor,
      appEmail: this.appEmail,
    };

    mkdirp(appDir);
    mkdirp(toolDir);
    mkdirp(testDir);

    // Base Directory
    this.template('.babelrc', destRoot + '/.babelrc');
    this.template('.csscomb.json', destRoot + '/.csscomb.json');
    this.template('.csslintrc', destRoot + '/.csslintrc');
    this.template('.editorconfig', destRoot + '/.editorconfig');
    this.template('.eslintrc', destRoot + '/.eslintrc');
    this.template('.flowconfig', destRoot + '/.flowconfig');
    this.template('.jscsrc', destRoot + '/.jscsrc');
    this.template('.jshintrc', destRoot + '/.jshintrc');
    this.template('.scss-lint.yml', destRoot + '/.scss-lint.yml');
    this.template('.travis.yml', destRoot + '/.travis.yml');
    this.template('preprocessor.js', destRoot + '/preprocessor.js');
    this.fs.copyTpl(this.templatePath('license.txt'),
      destRoot + '/license.txt', templateContext);
    this.fs.copyTpl(this.templatePath('_package.json'),
      destRoot + '/package.json', templateContext);
    this.fs.copyTpl(this.templatePath('README.md'),
      destRoot + '/README.md', templateContext);

    // Source Directory
    this.template('src/app.js', appDir + '/app.js');
    this.template('src/config.js', appDir + '/config.js');
    this.template('src/routes.js', appDir + '/routes.js');
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

  constructor: function() {
    generators.Base.apply(this, arguments);
  },

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
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false,
    });
  },
});
