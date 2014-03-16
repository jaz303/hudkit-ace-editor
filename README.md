# hudkit-ace-editor

A code editor widget for [hudkit](http://github.com/jaz303/hudkit.js), based on ACE.

## Installation

`hudkit-ace-editor` lists `hudkit` as a `peerDependency`, so:

```
$ npm install hudkit
$ npm install hudkit-ace-editor
$ cp -R node_modules/hudkit-ace-editor/ace-editor $ASSETS
```

Substitute `$ASSETS` with the directory from which your assets are served. Your HTML needs to include something like this:

```html
<script src='$ASSETS/ace-editor/ace.js'></script>
```

## Initialisation

Assuming a browserify workflow, you can initialise the editor like this:

```javascript
var hudkit = require('hudkit');

// requiring the module will automatically register it with hudkit
require('hudkit-ace-editor');

window.init = function() {
	var hk = hudkit.instance(window);
	var codeEditor = hk.aceEditor();
	hk.root.setRootWidget(codeEditor);
}
```

See `demo/index.htm`, `demo/main.js` and the `Makefile` for a concrete build example.