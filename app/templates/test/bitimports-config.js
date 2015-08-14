/* jshint unused: false, undef: false */
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "chai": "node_modules/chai/chai"
    },
    "urlArgs": 'bust=' + (new Date()).getTime()
  });

  // Add modules to exclude from pipeline processing
  importer.ignore(["chai", "dist/index"]);

  bitimports.Logger.enableAll();
  return importer;
})();

var require = System.require;
