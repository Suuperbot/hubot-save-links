var fs = require('fs');
var path = require('path');
var debug = require('debug')('save-links')

module.exports = function(robot) {
  var scriptsPath = path.resolve(__dirname, './src');
  var scripts = fs.readdirSync(scriptsPath);

  if(scripts.indexOf('index.js') > -1) {
    debug('loading hubot-save-links');
    robot.loadFile(scriptsPath, 'index.js');
  }
}
