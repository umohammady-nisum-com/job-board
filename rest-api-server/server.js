var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//MongoDB
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes 
app.use('/api', require('./routes/api'));

//StartServer
app.listen(3000);
console.log('API is running on port 3000');