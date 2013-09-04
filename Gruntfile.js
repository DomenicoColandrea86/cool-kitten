'use strict';
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n',
    // Task configuration.
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // files to concatenate
        src: ['js/jquery.stellar.min.js','js/jquery.easing.1.3.js', 'js/waypoints.min.js', 'js/scripts.js'],
        // the location of the resulting JS file
        dest: 'dist/js/scripts.js'
      }
    },
    uglify: {
      options: {
        // banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/scripts.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      gruntfile: {
        src: 'gruntfile.js'
      },
      files: {
        src: ['js/scripts.js']
      }
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          sassDir: 'scss',
          cssDir: 'css'
        }
      },
      dist: {
        options: {
          config: 'config.rb',
          sassDir: 'scss',
          cssDir: 'dist/css',
          outputStyle: 'compressed'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      gruntfile: {
        files: '<%= jshint.files.src %>',
        tasks: ['jshint:files']
      },
      files: ['scss/*.scss', '*.html', 'js/*.js', 'css/*.css'],
      tasks: ['compass:dev']
    },
    useminPrepare : {
      html: ['index.html']
    },
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/css/{,*/}*.css']
    },
    copy: {
      main: {
        files: [
          {src: ['*.html'], dest: 'dist/'}, // includes files in path and its subdirs
          {src: ['images/**/*'], dest: 'dist/'}, // includes files in path and its subdirs
          {src: ['*.png', '*.ico'], dest: 'dist/'}, // includes files in path and its subdirs
          {src: ['*.xml', '.htaccess'], dest: 'dist/'} // includes files in path and its subdirs
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');


  // Default task.
  grunt.registerTask('default', 'watch');

  // build task.
  grunt.registerTask('build', ['jshint:files', 'concat:dist', 'uglify:dist', 'compass:dist', 'copy:main', 'useminPrepare', 'usemin']);

};
