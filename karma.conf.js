module.exports = function(config) {
 config.set({
 frameworks: ['browserify','mocha','chai'],
 files: [
    './app/app.js',
    './app/tests/*.js'
  ],
 // start these browsers
 browsers: ['PhantomJS'],
 reporters: ['spec'],
 preprocessors: {
   './app/app.js': ['browserify']
 },
 logLevel: config.LOG_INFO,
 singleRun: false
 });
};
