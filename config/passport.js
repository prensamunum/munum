
var LocalStrategy    = require('passport-local').Strategy;
var passport = require('passport');
mongoose = require('mongoose');

module.exports = function(passport){
    var Staff = mongoose.model('staff');

    passport.serializeUser(function(staff, done) {
        done(null, staff.id);
    });

    passport.deserializeUser(function(id, done){
        //done(null, user);
        Staff.findOne({_id: id}, '-salt -password', function (err, staff){
            done(err, staff);
        });
    });

    require('./strategies/local.js')();
}
