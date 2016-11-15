module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | Version: <%= pkg.version %> \n* <%= pkg.homepage %> \n* <%= pkg.author %> \n*/\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: '../distro/js/<%= pkg.name %>.min.js'
      },
    },
    jsbeautifier : {
      src: 'js/<%= pkg.name %>.js',
      
      options: {
        dest: '../distro/',
        js: {
          braceStyle: "collapse",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 2,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
      }
    }
    },
    jshint : {
      all: ['js/**/*']
    },
    prettify : {
      
    },
    watch: {
      scripts: {
        files: ['css/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },    
    less: {
      development: {
        options: {
            paths: ['css'],
          compress: true,
          yuicompress: true,
          syncImport: true,
          strictImports: true          
        },
        files: {
          "../distro/css/style.css" : "css/style.less"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','jsbeautifier']);

};