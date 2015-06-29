/*
 * grunt-xml2ddl
 * https://github.com/tjhall13/grunt-xml2ddl
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */
 
'use strict';

var xml2ddl = require('xml2ddl');

var semaphore = {
    create: require('semaphore')
};

module.exports = function(grunt) {
    grunt.registerMultiTask('xml2ddl', 'A grunt plugin for xml2ddl library.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            syntax: 'mysql'
        });
        
        var sem, ddl;
        
        this.files.forEach(function(file) {
            sem = semaphore.create(file.src.length);
            ddl = [];
            
            file.src.forEach(function(filename) {
                sem.take(1, function() {
                    xml2ddl(filename, options.syntax, function(err, data) {
                        if(!err) {
                            ddl = ddl.concat(data);
                        } else {
                            grunt.fail(err);
                        }
                        
                        sem.leave(1);
                    });
                });
            });
            
            sem.take(file.src.length, function() {
                var content = '';
                
                ddl.forEach(function(statement) {
                    content = content.concat(statement, '\n');
                });
                
                grunt.file.write(file.dest, content);
                
                sem.leave(file.src.length);
            });
        });
    });
};
