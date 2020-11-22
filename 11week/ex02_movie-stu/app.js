// Express를 이용해서 RESTful 서비스 작성
// 1. 영화 목록과 영화 상세보기 : JSON
// 2. 영화 리뷰 기능 추가 : JSON
// 3. 라우터 분리
// 4. 템플릿 적용

// app.js
var express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var initialData = fs.readFileSync('initialDB.json');
var movieList = JSON.parse(initialData);

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.get('/movies', showMovieList);
app.get('/movies/:movieId', showMovieDetail);
app.post('/movies/:movieId', addReview);

app.get('/', function(req, res) {
	res.end('Welcome to Movies app');
});

function addReview(req, res, next) {
   var movieId = req.params.movieId;
   var movie = findMovie(movieId);
   if ( ! movie ) {
      var error = new Error('Not Found');
      error.code = 404;
      return next(error);
   }
   
   var review = req.body.review;
   movie.reviews.push(review);
   // res.send({msg:'success'});   
   res.redirect('/movies/' + movieId);
}

function findMovie(movieId) {
   for(var i = 0 ; i < movieList.length; i++) {
      var item = movieList[i];
      if ( item.movieId == movieId ) {
         return item;
      }
   }   
   return null;
}

function showMovieDetail(req, res, next) {
   var movieId = req.params.movieId;
   var movie = findMovie(movieId);

   if ( ! movie ) {
      var error = new Error('Not Found');
      error.code = 404;
      return next(error);
   }
   
   //res.send(movie);
   res.render('movieDetail', {movie:movie} );  
}

function showMovieList(req, res) {
   var data = [];
   movieList.forEach(function(movie) {
      var info = {
         movieId : movie.movieId,
         title : movie.title
      };
      data.push(info);
   });
   var result = {
      count : data.length,
      data : data
   };
   // res.send(result);
   res.render('movieList', result);
}

app.listen(3000, () => {
   console.log('server on port 3000');
});