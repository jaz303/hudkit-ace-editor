demo/bundle.js: demo/main.js
	browserify -o $@ -g brfs $<

watch:
	watchify -o demo/bundle.js -g brfs demo/main.js

clean:
	rm -f demo/bundle.js