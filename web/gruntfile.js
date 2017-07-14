module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      uglify: {
          taskOne: {
              files:{
                  'dist/Main.min.js' : ['app.js', 'config.js', 'controllers/*.js','services/*.js']
              }
          }
      }
    });
};
