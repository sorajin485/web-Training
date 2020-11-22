// ./01httpserver/httpRequest.js
var http = require('http');
var server = http.createServer(function(req, res) {

	// console.log('Method : ', req.method);
	// console.log('url : ', req.url);
	// console.log('headers : ', req.headers);
	console.log('headers : ', req.headers['user-agent']);			
	res.write('Hello World');
	res.end();
})
  .listen(3000, () => { // 서버 연결
    console.log('server on : 3000 port')
});