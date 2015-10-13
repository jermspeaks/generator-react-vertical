# React/Flux Module Generator

[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/jermspeaks/generator-react-vertical/blob/master/LICENSE)

A Yeoman generator for React & Flux for projects vertically integrated.

Most React and Flux templates have a horizontal structure for their projects.
This means all of your elements belong in the same folder, i.e. your components
go in a `components` folder.

This generator works for vertically integrated React and Flux projects. The
sub-generator will create modules for you with a smaller version of the
horizontal structure. Each module is self-contained, although there may be a
base that is `common` to everything else. For example, all modules share the
same `Dispatcher`, or every store shares the same common `BaseStore`.

## Installation

### Yeoman

For this generator to work, [Yeoman](https://github.com/yeoman/yo) must be globally installed.

```bash
npm install -g yo
```

Then you can install this `generator-react-vertical` module.

```bash
npm install -g generator-react-vertical
```

## Base Generator

`In Development`

```bash
yo react-vertical
```

## Sub-generators

The sub generators assumes you already ahve a project up and running. They are to
help you through developing new modules, components, etc.

### Module

When you need to start creating new modules, simple use the sub-generator `module`.

Within the module sub-generator, the following default files are generated for you.
Replace #{Module} with your own module name.

```bash
./module
├── actions
│   └── ModuleActions.js
├── components
│   └── ModulePage
│       ├── ModulePage.js
│       ├── ModulePage.scss
│       └── package.json
├── constants
│   └── ModuleConstants.js
└── stores
    └── ModuleStore.js
```

#### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `-h`, `--help`	| Print the generator's options and usage    |                |
| `--skip-cache`    | Do not remember prompt answers             | Default: false |
| `--skip-install`  | Do not automatically install dependencies  | Default: false |

#### Arguments

| Arguments   | Description | Type | Required |
| ----------- | ----------- | ---- | -------- |
| moduleName  | Name of the module | String | true |

#### Examples

Without services, the following command will generate the following:

```bash
yo react-vertical:module auth
# Generates the following:
.
└── Auth
    ├── actions
    │   └── AuthActions.js
    ├── components
    │   └── AuthPage
    ├── constants
    │   └── AuthConstants.js
    └── stores
        └── AuthStores.js
```

### Common

If you want to create a common component other modules depend on, this sub-generator
will create the files needed for you.

Within the common sub-generator, the following default files are generated for you.
Replace #{CommonComponentName} with your own module name.

```bash
.
└── src
    └── common
        └── components
             └── CommonComponentName
                 ├── CommonComponentName.js
                 ├── CommonComponentName.scss
                 └── package.json
```

#### Arguments

| Arguments   | Description | Type | Required |
| ----------- | ----------- | ---- | -------- |
| commonName  | Name of the module | String | true |

## Contributing

`WIP`
