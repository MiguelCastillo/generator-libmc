# generator-libmc [![Build Status](https://secure.travis-ci.org/MiguelCastillo/generator-libmc.png?branch=master)](https://travis-ci.org/MiguelCastillo/generator-libmc)

> [Yeoman](http://yeoman.io) generator for micro libraries that run in the Browser and Node.js. It has browserify, mocha, chai, phantomjs, connect, eslint, bit-imports, and grunt as the core stack for linting, building, and testing.

The primary intent of this generator is to provide a good starting point to `compile` your code with [browserify](http://browserify.org/) and run unit tests in the browser and phantomjs with [mocha](http://mochajs.org/).

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-libmc from npm, run:

```bash
npm install -g generator-libmc
```

Initiate the generator:

```bash
yo libmc
```

And finally, configure your package.json:

```bash
npm init
```

### [Browserify](http://browserify.org/) compilation
Browserify is setup to compile `src/index.js` in order to create a [UMD](https://github.com/umdjs/umd) file `dist/index.js`. The intent is to have the basic plumbing to get you up and running with a build artifact, so please feel free to adjust `Gruntfile.js` to use the files of your choice. To build `src/index.js`, run `grunt build`.  For more details, please see `build` grunt task below.

### [Bitimports](https://github.com/MiguelCastillo/bit-imports) runs unit tests
Bitimports is the module loader used for running your tests. It runs unit tests in the browser and in PhantomJS. It is wired up with [Babel](https://babeljs.io/) so that you can write your unit tests using ES6 (ES2015) and newer features.

### [Mocha](http://mochajs.org/) unit tests
Unit tests are configured in the generated `test/SpecRunner.js` file, which is where you will need to add other unit test specs.  Currently, the generator will give you an overly simplified `test/spec/index.js` sample file to illustrate the flow of the unit test setup.

All your test files are defined in `test/SpecRunner.js`.  If you wish to add more tests, that's where you add them.

The unit tests are setup to run in the browser and phantomjs. To run unit tests in phantomjs, run `grunt test`. For more details, please see `livereload` and `test` grunt tasks below.

### [Chai](http://chaijs.com/) for unit test assertions
Chai is configured alongside mocha to provide assertion functionality for your unit tests.

### [ESLint](http://eslint.org/) linting
Files with `.js` extensions in the root, `src`, and `test` directories are configured to be linted with [eslint](http://eslint.org/).  The settings that eslint picks up are defined in `.eslintrc`, which is in the root directory. `.eslintrc` is the file you want to tweak in order to configure eslint for your particular taste. To run eslint, run `grunt eslint`.  For more details, please see `eslint` grunt task below.

### [Grunt](http://gruntjs.com/) tasks

#### grunt build
Runs eslint and then browserify on src/index.js.

```bash
grunt build
```

#### grunt serve
Starts a connect server and opens up a browser window that can continuously run unit tests

```bash
grunt serve
```

#### grunt test
Runs all unit tests one time and reports results in the console

```bash
grunt test
```

#### grunt eslint
Lints your code and report errors/warnings accordingly.

```bash
grunt eslint
```

## License

MIT
