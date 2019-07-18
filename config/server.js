var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;