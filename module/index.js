'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');
var S = require('string');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot();
    var sourceRoot = this.sourceRoot();
    var moduleName = S(this.moduleName).capitalize().s;
    var moduleDir = destRoot + '/src/' + moduleName;
    var moduleFolders = {
      actions: moduleDir + '/actions',
      components: moduleDir + '/components/' + moduleName + 'Page',
      constants: moduleDir + '/constants',
      services: moduleDir + '/services',
      stores: moduleDir + '/stores',
    };
    var templateContext = {
      moduleName: moduleName,
      services: this.services,
    };

    mkdirp(moduleDir + '/actions');
    mkdirp(moduleDir + '/components');
    mkdirp(moduleDir + '/components/' + moduleName + 'Page');

    // Create Test Directory
    if (this.tests) {
      mkdirp(moduleDir + '/components/' + moduleName + 'Page/__tests__');
    }

    mkdirp(moduleDir + '/constants');
    mkdirp(moduleDir + '/stores');

    // Add Services if Services option selected
    if (this.services) {
      mkdirp(moduleDir + '/services');
    }

    this.fs.copyTpl(sourceRoot + '/ModuleActions.js', moduleFolders.actions + '/' + moduleName + 'Actions.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/ModulePage.js', moduleFolders.components + '/' + moduleName + 'Page.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/ModulePage.scss', moduleFolders.components + '/' + moduleName + 'Page.scss', templateContext);
    this.fs.copyTpl(sourceRoot + '/_package.json', moduleFolders.components + '/package.json', templateContext);
    this.fs.copy(sourceRoot + '/ModuleConstants.js', moduleFolders.constants + '/' + moduleName + 'Constants.js');
    this.fs.copyTpl(sourceRoot + '/ModuleStore.js', moduleFolders.stores + '/' + moduleName + 'Stores.js', templateContext);
    if (this.services) {
      this.fs.copyTpl(sourceRoot + '/ModuleService.js', moduleFolders.services + '/' + moduleName + 'Service.js', templateContext);
    }

    if (!!this.tests) {
      this.fs.copyTpl(sourceRoot + '/ModuleTests.js', moduleFolders.components + '/__tests__/' + moduleName + 'Page-tests.js', templateContext);
    }
  },

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('moduleName', {
      required: true,
      type: String,
      desc: 'Name of the module',
    });

    this.option('services',  {
      desc: 'Include services in the module\nGenerally for APIs',
      type: Boolean,
      alias: 's',
      defaults: false,
    });

    this.option('tests',  {
      desc: 'Include tests for the component',
      type: Boolean,
      alias: 't',
      defaults: true,
    });

    this.services = this.options.services;

    // option string caught as string and not boolean.
    // This method validates whether the option value is true or not
    // NOTE if user types anything else in, besides false,
    // the value is still false. May be an issue
    this.tests = (this.options.tests === 'true' || this.options.tests === true);

    this.log('Creating module ' + this.moduleName + '.');
  },

  initializing: function() {
    var message = chalk.bgBlack.bold('\nWelcome to React-Vertical Project\n') + chalk.underline('JS React/Flux Compiler\n');
    this.log(yosay(message));
  },

  configuring: function() {
    this.config.save();
  },

  writing: function() {
    this._createProjectFileSystem();
  },
});
