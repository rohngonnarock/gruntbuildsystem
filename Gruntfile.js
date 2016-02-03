module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['js/**/*.js'],
                dest: 'build/js/scripts.js'
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'build/css/styles.css'
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js','uglify']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/scripts.min.js': 'build/js/scripts.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'watch','uglify']);
};
