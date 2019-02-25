'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {

    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db, function (err, res) {
        if (err) {
            console.log ('ERROR connecting to');
        } else {
            console.log ('Mongoose Iniciado correctamente');
        }
    });
    //var db = mongoose.createConnection(config.db);

    require('../app/models/delegate.server.model');
    require('../app/models/delegation.server.model');
    require('../app/models/staff.server.model');

    return db;
}
