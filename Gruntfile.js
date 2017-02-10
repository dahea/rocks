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
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less:development'],
        options: {
          nospawn: true
        }
      }
    },
    serve: {
      options: {
          port: 4476
      }
    }
  });


  // Load grunt package(s).
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s)
  grunt.registerTask('default', ['serve', 'watch', 'less:development']);
};