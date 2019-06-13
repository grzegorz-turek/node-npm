'use strict';
var os = require('os');
var colors = require('colors');
var timeConversion = require('./timeConversion');
var ostype = os.type();

if(ostype === 'Darwin') {
    ostype = 'OSX';
} if(ostype === 'Windows_NT') {
    ostype = 'Windows';
}

function getOSinfo() {
    console.log(colors.grey('System: ') + ostype + ' ' + os.release());
    console.log(colors.blue('CPU: ') + os.cpus()[0].model);
    timeConversion.timeChange();
    console.log(colors.red('User name: ') + os.userInfo().username);
    console.log(colors.green('User home dir: ') + os.userInfo().homedir);
}

exports.print = getOSinfo;