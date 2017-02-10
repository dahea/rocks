module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'css/main.css': 'less/main.less'
        }
      },
      watch: {
        styles: {
          files: ['less/**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    },
    serve: {
        options: {
            port: 4476
        }
    }
  });


  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-serve');
};