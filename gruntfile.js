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
        },
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'Spec'
            },
            all: { src: ['test/*.js'] }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-nsp-package');
    grunt.registerTask('default', ['jshint','simplemocha']);
    grunt.registerTask('default','validate-package');
};