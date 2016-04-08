"use strict";

const child_process = require('child_process');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    tslint: {
      options: {
        configuration: 'tslint.json'
      },
      files: {
        src: ['**/*.ts', '!node_modules/**', '!typings/**']
      }
    },
    watch: {
      generate: {
        files: 'source/ember-docs.json',
        tasks: ['generate'],
        options: {
          event: ['changed', 'added']
        }
      },
      build: {
        files: ['**/*.ts', '!node_modules/**'],
        tasks: ['build']
      },
      lint: {
        files: ['**/*.ts', '!node_modules/**', '!typings/**'],
        tasks: ['tslint'],
        options: {
          atBegin: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask('update-source', 'Update Ember Source', function() {
    let branch = grunt.option('branch');

    console.log('Removing old source');
    child_process.execFileSync('rm', ['-rf', 'source']);

    let args = ['clone', '--depth=1'];
    if (branch) {
      args.push(`--branch=${branch}`);
    }
    args.push('https://github.com/components/ember.git', 'source');

    console.log('Cloning updated source');
    if (branch) {
      console.log(`Branch: ${branch}`);
    }

    child_process.execFileSync('git', args);
  });

  grunt.registerTask('generate', 'Generate intermediate d.ts', function() {
    child_process.execFileSync('npm', ['run', 'generate']);
  });

  grunt.registerTask('build', 'Build final d.ts', function() {
    child_process.execFileSync('typings', ['bundle', '-o', 'out']);
  });

};
