module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	my_target: {
            files: {
                'output.min.js': ['src/testo.js']
            }
        }
      },
  jshint: {
  // define the files to lint
  files: ['Gruntfile.js', 'src/*.js', 'test/**/*.js'],
  // configure JSHint (documented at http://www.jshint.com/docs/)
  options: {
      // more options here if you want to override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true
    }
  }
},
karma: {
  unit: {
    configFile: 'karma.conf.js'
  },
  //continuous integration mode: run tests once in PhantomJS browser.
  continuous: {
    configFile: 'karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  }
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'karma:continuous']);

};
