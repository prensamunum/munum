var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Staff = require('mongoose').model('staff');

module.exports = function () {
    passport.use('local', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password'
        },
        function( email, password, done) {
            if (email)
                email = email.toLowerCase();
            process.nextTick(function() {
                Staff.findOne({email: email}, function(err, staff) {
                    if (err) {
                        return done(err);
                    }

                    if (!staff) {
                        return done(null, false, {
                            message: 'correo Desconocido'
                        });
                    }

                    if (!staff.authenticate(password)) {
                        return done(null, false, {
                            message: 'Contaseña invalida'
                        });
                    }

                    return done(null, staff);
                })
            })
        }));
    // passport.use(new LocalStrategy({
    //         usernameField: 'email',
    //         passwordField: 'password'
    //     },
    //     function (email, password, done) {
    //         //if (username)
    //            // username = username.toLowerCase();
    //         Staff.findOne({
    //             email: email
    //         }, function (err, staff) {
    //
    //             if (err) {
    //                 return done(err);
    //             }
    //             if (!staff) {
    //                 return done(null, false, {
    //                     message: 'Unknown user or invalid password1'
    //                 });
    //             }
    //             if (!staff.authenticate(password)) {
    //                 return done(null, false, {
    //                     message: 'Unknown user or invalid password2'
    //                 });
    //             }
    //
    //             return done(null, staff);
    //         });
    //     }
    // ));
};
