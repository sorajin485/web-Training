// ./02ejs-ex/main.js
var express = require('express');
var app = express();
var ejs = require('ejs');

// ejs 템플릿
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

var router = require('./routes/controller')(app);

var server = app.listen(3000, () => {
    console.log('server on port 3000');
});