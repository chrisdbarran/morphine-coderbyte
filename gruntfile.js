module.exports = function (grunt) {
    var banner = '/*n<%= pkg.name %> <%= pkg.version %> - <%= pkg.description' +
    ' %>n<%= pkg.repository.url %>nBuilt on ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>n*/n';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'src/*.js', 'test/*.js'],
            options: {
                maxlen: 80,
                quotmark: 'single'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};