module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
  },

    sass: {
        dev: {
            options: {
                    style: 'expanded',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
            files: {
                'static/main.css': 'src/sass/style.scss'
            }
        }
    },

    bower: {
        install: {
            //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
        }
    },

    jade: {
        compile: {
            options: {
                pretty: true,
                data: {
                    debug: false
                }
            },
            files: {
                'static/index.html': 'src/jade/body.jade'
            }
        }
    },

    watch: {
        options: {
            livereload: true,
        },
        jade: {
            files: 'src/jade/*.jade',
            tasks: ['jade'],
            options: {
                livereload: false
            }
        },
        css: {
            files: 'src/**/*.scss',
            tasks: ['sass']
        },
        html: {
            files: ['*.html', 'static/*.html']
        },
    },

    connect: {
        server: {
            options: {
                port: 9000,
                base: {
                    path: 'static/',
                    options: {
                        index: 'index.html'
                    }
                },
                hostname: '0.0.0.0',
                protocol: 'http',
                livereload: true,
                open: true,
            }
        },
        server2: {
            options: {
                port: 9000,
                base: {
                    path: 'static/',
                    options: {
                        index: 'index.html'
                    }
                },
                hostname: '0.0.0.0',
                protocol: 'http',
                livereload: true,
                open: true,
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task(s).
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('server', ['connect:server', 'watch']);
    grunt.registerTask('server-jade', ['connect:server2', 'watch']);

};
