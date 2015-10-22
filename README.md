# React/Flux Module Generator

[![Dependency Status](https://gemnasium.com/jermspeaks/generator-react-vertical.svg)](https://gemnasium.com/jermspeaks/generator-react-vertical)
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

Creates the base project. Loosely based off [React-starter-kit](https://github.com/kriasoft/react-starter-kit).

```bash
yo react-vertical

# Builds
.
├── .babelrc
├── .csscomb.json
├── .csslintrc
├── .editorconfig
├── .eslintrc
├── .flowconfig
├── .jscsrc
├── .jshintrc
├── .scss-lint.yml
├── .travis.yml
├── .yo-rc.json
├── README.md
├── license.txt
├── package.json
├── preprocessor.js
├── src
│   ├── app.js
│   ├── common
│   │   ├── Dispatcher.js
│   │   ├── HttpClient.js
│   │   └── Location.js
│   ├── config.js
│   ├── public
│   │   ├── apple-touch-icon.png
│   │   ├── browserconfig.xml
│   │   ├── crossdomain.xml
│   │   ├── favicon.ico
│   │   ├── humans.txt
│   │   ├── robots.txt
│   │   ├── tile-wide.png
│   │   └── tile.png
│   ├── routes.js
│   ├── server
│   │   ├── package.json
│   │   └── server.js
│   └── utils
│       ├── DOMUtils.js
│       └── fs.js
└── tools
    ├── build.js
    ├── bundle.js
    ├── clean.js
    ├── config.js
    ├── copy.js
    ├── serve.js
    └── start.js
```

Besides project base files, includes Source, Tests, and Tools folders.

`In Progress`: Tests

### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `-h`, `--help`     | Print the generator's options and usage    |                |
| `--skip-cache`     | Do not remember prompt answers             | Default: false |
| `--skip-install`   | Do not automatically install dependencies  | Default: false |

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
| `-h`, `--help`     | Print the generator's options and usage    |                |
| `-s`, `--services` | Include services in the module             |                |
| `--skip-cache`     | Do not remember prompt answers             | Default: false |
| `--skip-install`   | Do not automatically install dependencies  | Default: false |

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

#### Examples

The following command will generate the following:

```bash
yo react-vertical:common TextBox
# Generates the following:
.
└── src
    └── common
        └── components
             └── TextBox
                 ├── TextBox.js
                 ├── TextBox.scss
                 └── package.json
```

## Contributing

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

The code is available under the [MIT license](LICENSE).
