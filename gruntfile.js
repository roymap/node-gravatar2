module.exports = function(grunt) {
  'use strict';

  var cfg = {
    pkg: grunt.file.readJSON('./package.json'),
    jshint: {
      options: {
      },
      all: ['./lib/*.js']
    }
  };

  grunt.initConfig(cfg);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};
