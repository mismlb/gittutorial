module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass', 'concat:styles']
            }
        },
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['js/Main.js', 'js/Controller.js'],
                dest: 'bin/<%= pkg.name %>.js'
            },
            styles: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
                     'css/custom.css'],
                dest: 'css/styles.css'
            }
        },
        uglify: {
            options: {
            mangle: false
            },
            my_target: {
                files: {
                    'bin/js/<%= pkg.name %>.min.js' : ['bin/<%= pkg.name %>.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/custom.css' : 'sass/*.scss'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //tasks
    grunt.registerTask('justJavaScript', ['concat', 'uglify']);
    grunt.registerTask('default', ['concat']);
}