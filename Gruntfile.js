module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/**/*.js'],
                dest: 'www/js/scripts.js'
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'www/css/styles.css'
            }
        },
        watch: {
            all: {
                files: 'index.html',
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'uglify']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'www/js/scripts.min.js': 'www/js/scripts.js'
                }
            }
        },
        express: {
            all: {
                options: {
                    port: 8000,
                    hostname: "0.0.0.0",
                    bases: ['www'],
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }

    });
    grunt.registerTask('default', ['concat', 'uglify', 'express', 'open', 'watch']);
};
