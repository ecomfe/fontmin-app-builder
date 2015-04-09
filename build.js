var NwBuilder = require('node-webkit-builder');

var nw = new NwBuilder({
    version: '0.12.0',
    files: '../fontmin-app',
    cacheDir: './cache',
    buildDir: './build',
    macIcns: '../fontmin-app/fontmin.icns',
    macZip: true,
    winIco: '../fontmin-app/fontmin.png',
    platforms: ['osx32', 'osx64']
    // platforms: ['win32', 'win64']
});

//Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
})
.catch(function (error) {
    console.error(error);
});
