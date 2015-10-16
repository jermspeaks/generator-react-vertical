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
    mkdirp(moduleDir + '/constants');
    mkdirp(moduleDir + '/stores');
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

    this.services = this.options.services;

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
