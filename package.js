Package.describe({
  name: 'harmon:meteor-josh-js',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package for josh.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/harmon25/meteor-josh-js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('underscore');
  api.use('jquery');
  api.addFiles(['client/history.js','client/killring.js','client/readline.js','client/input.js','client/shell.js', 'client/pathhandler.js', 'client/meteor-josh-js.js'], 'client');
  api.export('Shell', 'client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('harmon:meteor-josh-js', 'client');
  api.addFiles('tests/client/meteor-josh-js-tests.js', 'client');
});
