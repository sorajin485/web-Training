// ./01built_in_module/stream.js
var fs = require('fs');

var os = fs.createWriteStream('./output.txt');

os.on('finish', function() {
	console.log('finish!');
});

// 여기에 작성
var is = process.stdin;
is.pipe(os);

