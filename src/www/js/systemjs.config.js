(function(global) {

  var map = { 'app': 'js' };

  var packages = {
    'app': {
			main: 'main.js',
			defaultExtension: 'js'
		}
  };

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
