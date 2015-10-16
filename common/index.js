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
    var commonName = S(this.commonName).capitalize().s;
    var commonDir = destRoot + '/src/common/components';
    var commonComponentFolder = commonDir + '/' + commonName;
    var templateContext = {
      commonName: commonName,
    };

    mkdirp(commonComponentFolder);

    this.fs.copyTpl(sourceRoot + '/CommonComponent.js', commonComponentFolder + '/' + commonName + '.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/CommonComponent.scss', commonComponentFolder + '/' + commonName + '.scss', templateContext);
    this.fs.copyTpl(sourceRoot + '/_package.json', commonComponentFolder + '/package.json', templateContext);
  },

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('commonName', {
      required: true,
      type: String,
      desc: 'Name of the module',
    });

    // TODO add option for service (bool)

    this.log('Creating common module ' + this.moduleName + '.');
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
