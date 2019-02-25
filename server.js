//process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport(require("passport"));

app.listen(process.env.PORT || config.port , function(){
    console.log('Sevidor ejecutándose en http://localhost:'+ config.port);
});

module.exports = app;