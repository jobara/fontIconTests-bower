module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build"],
        concat: {
            dist: {
                src: ["lib/jquery-1.9.1.min.js", "js/fontIconTest.js"],
                dest: "build/fontIconTest-concat.js"
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
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("build", ["clean", "concat", "uglify"]);
    grunt.registerTask("default", ["clean"]);
};
