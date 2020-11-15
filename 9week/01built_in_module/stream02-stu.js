// ./01built_in_module/stream02.js
var fs = require('fs');

var os = fs.createWriteStream('./output2.txt');

os.on('finish', function() {
	console.log('finish!');
});

// 여기에 작성
os.write('1234\n');
os.write('5678\n');
os.end('9\n');    // 종료


// // 키보드에서 입력한 내용
// var is = process.stdin;
// // 아웃풋 스트림(파일)로 연결
// is.pipe(os);
