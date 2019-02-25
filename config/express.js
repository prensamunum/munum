var config = require('./config'),
    express = require('express'),
    path = require('path'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport');

module.exports = function () {

    var app = express();

    // Parsers
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));

    app.use(session({
        saveUninitializaed: true,
        resave: true,
        secret: config.sessionSecreta
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(path.join(__dirname, '../dist')));

    require('../app/routes/delegate.server.route.js')(app);
    require('../app/routes/delegation.server.route.js')(app);
    require('../app/routes/staff.server.route.js')(app);

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    return app;
}