var hudkit = require('hudkit');

require('../');

window.init = function() {

	var hk = hudkit.instance(window);

	var codeEditor = hk.aceEditor();

	hk.root.setRootWidget(codeEditor);

}