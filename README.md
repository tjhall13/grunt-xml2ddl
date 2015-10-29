# grunt-xml2ddl

> A grunt plugin for xml2ddl library.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xml2ddl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xml2ddl');
```

## The "xml2ddl" task

### Overview
In your project's Gruntfile, add a section named `xml2ddl` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xml2ddl: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `mysql`

A string value that sets the syntax. Currently only mysql is available.

### Usage Examples

#### Default Options
In this example, the default options are used to convert a set of xml schemas into a ddl file used to generate the database.

```js
grunt.initConfig({
  xml2ddl: {
    options: {},
    files: {
      'db/test.ddl': ['db/schema1.xml', 'db/schema2.xml']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
