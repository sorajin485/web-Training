// ./05express/app7.js
/**
 * POST 방식으로 전달된 파라미터 확인하기
 *
 * (1) 웹 브라우저에서 http://localhost:3000/public/login.html 페이지 열고 요청
 * (2) 크롬 브라우저의 Postman 앱이나 기타 POST 요청 도구를 사용하여 POST 방식으로 요청
 *     GET 방식으로 요청 시에는 웹브라우저에서 아래 URL로 요청해야 함
 *         http://localhost:3000?id=test1&password=123456
 *
 * @date 2016-10-25
 * @author Mike
 */
// ./05express/app7.js
// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

var bodyParser = require('body-parser')
  , static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);
let port = app.get('port');
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));

// 미들웨어에서 파라미터 확인
app.use(function(req, res, next) {
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.end();
});

// Express 서버 시작
http.createServer(app).listen(port, function(){
  console.log('server on port ' + port);
});
