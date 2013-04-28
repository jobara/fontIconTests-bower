module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: "build",
            buildResources: "build/fontIconTest-concat.js"
        },
        concat: {
            dist: {
                src: ["lib/jquery-1.9.1.min.js", "js/fontIconTest.js"],
                dest: "build/fontIconTest-concat.js"
            }
        },
        jshint: {
            source: ["Gruntfile.js", "js/*.js"]
        },
        watch: {
            js: {
                files: ["Gruntfile.js", "js/*.js"],
                tasks: ["jshint"],
                options: {
                    debounceDelay: 250
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            my_target: {
                files: {
                    "build/fontIconTest.min.js": ["build/fontIconTest-concat.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("build", ["clean", "concat", "uglify", "clean:buildResources"]);
    grunt.registerTask("default", ["clean:build"]);
};
