module.exports = function(config) {
 config.set({
 frameworks: ['browserify','mocha','chai'],
 files: [
    './app/app.js',
    './app/tests/*.js'
  ],
 // start these browsers
 browsers: ['PhantomJS'],
 reporters: ['progress', 'coverage'],
 preprocessors: {
   './app/app.js': ['coverage', 'browserify']
 },
 coverageReporter: {
 type: 'html',
 dir: 'coverage'
 },
 logLevel: config.LOG_INFO,
 singleRun: false
 });
};
