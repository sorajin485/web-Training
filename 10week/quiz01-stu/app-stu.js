// ��ȭ ������ ������ ���ε� ���� �ǽ�

// 1. ��� ���
// 2. POST ��û ó��
// 3. ��ȭ ������
// 4. ������ ���ε� ��� �߰�

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var pathUtil = require('path');
var url = require('url');
var formidable = require('formidable');

var uploadDir = 
var imageDir = 




var server = http.createServer(function (req, res) {
   if ( req.method.toLowerCase() == 'get' && req.url == '/' ) {
          
   }
   else if ( req.method.toLowerCase() == 'get' ) {
      // �̹���
      var parsed = url.parse(req.url);
      // 127.0.0.1:3000/images/Avata.jpg?12331
      var path = __dirname + parsed.pathname; // /images/Avata.jpg
      fs.access(path, function(err) {
         if ( err ) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
         }
         var is = fs.createReadStream(path);
         is.pipe(res);
      });      
   }
   else if ( req.method.toLowerCase() == 'post') {
      
   }
   else {
      res.statusCode = 400;
      res.end('Error');
   }
});

server.listen(3000);

function addNewMovie(req, res) {
   var form = new formidable.IncomingForm();
   form.keepExtenstion = true;
   form.uploadDir = uploadDir;
   form.parse(req, function(err, fields, files) {
      if ( err ) {
         res.statusCode = 404;
         res.end('Error');
         return;
      }

      //poster.path;
      var ext = pathUtil.extname(poster.name);
      var newFileName = title + ext;
      var newPath = imageDir + pathUtil.sep + newFileName;
      
       
   });

}

function showList(req, res) {
   var html = '<html>';
   html += '<head>';
   html += '<meta charset="utf-8">';
   html += '<style>';
   html += 'form label { width:100px; display:inline-block; }'
   html += 'li img { height:100px }';
   html += '</style>';
   html += '</head>';
   html += '<body>';
   html += '<h1>Favorite Movie</h1>';
   html += '<div>';
   html += '<ul>';

      html += '<li>';
      if ( movie.poster ) {
         html += '<img src="' + movie.poster +'">';
      }
      html += movie.title + '(' + movie.director + ',' + movie.year + ')' + '</li>';
   });
   html += '</ul>';
   html += '</div>';
   
   html += '<form method="post" action="." enctype="multipart/form-data">';
   html += '<h4>�� ��ȭ �Է�</h4>';
   html += '<ul>';
   html += '<li><label>��ȭ ����</label><input type="text" name="title"></li>';
   html += '<li><label>��ȭ ����</label><input type="text" name="director"></li>';
   html += '<li><label>����</label><input type="number" name="year"></li>';
   html += '<li><label>������</label><input type="file" name="poster"></li>';   
   html += '</ul>';
   html += '<input type="submit" value="�ø���">';
   html += '</form>';
   
   html += '</body>';
   html += '</html>';
   res.writeHeader(200, {'Contnet-Type':'text/html'});
   res.end(html);
}
