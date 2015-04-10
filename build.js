#!/usr/bin/env node
var NwBuilder = require('node-webkit-builder');

var platforms = {
    'win32': ['win32', 'win64'],
    'darwin': ['osx32', 'osx64']
};

var nw = new NwBuilder({
    version: '0.12.0',
    files: [
        '../fontmin-app/**/**',
        '!../fontmin-app/.git/**/**',
        '!../fontmin-app/dep/webcomponentsjs/**',
        '!../fontmin-app/node_modules/.bin/**'
    ],
    cacheDir: './cache',
    buildDir: './build',
    macIcns: '../fontmin-app/fontmin.icns',
    winIco: '../fontmin-app/fontmin.png',
    platforms: platforms[process.platform]
});

//Log stuff you want
nw.on('log', console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
})
.catch(function (error) {
    console.error(error);
});
