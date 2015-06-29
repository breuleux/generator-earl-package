'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Let us write a package in ' + chalk.green('Earl Grey')
    ));

    var prompts = [
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: "",
        store: true
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
        default: this.appname.replace(" ", "-")
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe it?',
        default: ""
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
        default: "Bobby Tables",
        store: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'License?',
        default: "MIT",
        store: true
      },
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('index.eg'),
        this.destinationPath('src/index.eg')
      );
      this.fs.copy(
        this.templatePath('mocha.opts'),
        this.destinationPath('test/mocha.opts')
      );
      this.fs.copy(
        this.templatePath('test.eg'),
        this.destinationPath('test/test.eg')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );
    }
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
