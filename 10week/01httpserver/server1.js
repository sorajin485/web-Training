// ./01httpserver/server1.js
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.access('./images/cat.jpg', function(err) {
		if ( err ) {
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.readFile('./images/cat.jpg', function(err, data) {			
			res.end(data);
		});
		
	});
})
  .listen(3000, () => { // 서버 연결 
    console.log('server on : 3000 port')
});