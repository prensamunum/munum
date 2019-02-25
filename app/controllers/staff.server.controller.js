var mongoose = require('mongoose'),
    passport = require('passport'),
    errorHandler = require('./errors.server.controller'),
    Staff = mongoose.model('staff');

exports.list = function (req, res, next) {
    Staff.find({}, function (err, staff) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(staff);
        }
    })
}

exports.delete = function (req, res) {
    var staff = req.staffD;
    staff.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(staff);
        }
    });
};

exports.update = function (req, res, next) {
    var staff = req.staffD;

    Staff.findByIdAndUpdate(staff._id, req.body, function (err, staffRes) {
        if (err) {
            return (next(err));
        } else {
            res.json(staffRes);
        }
    })
}


exports.findOne = function (req, res, next) {
    console.log()
    Staff.findById({_id: req.body.id})
        .exec(function (err, staff) {
            if (err) return next(err);
            if (!staff) return next(new Error('Failed to load Customer ' + req.body.id));
            else res.json(staff);
        });
};


exports.signup = function (req, res, next) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;

    var staff = new Staff(req.body);

    staff.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            staff.password = undefined;
            staff.salt = undefined;

            res.json(staff);
        }
    });
};

exports.signin = function (req, res, next) {

    passport.authenticate('local', function (err, staff, info) {
        if (err || !staff) {
            res.status(400).send(info);
        } else {
            // Eliminar datos sensibles
            staff.password = undefined;
            staff.salt = undefined;

            req.login(staff, function (err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    return res.json(staff);
                }
            });
        }
    })(req, res, next);
}

exports.signout = function (req, res) {
    req.logout();
    return res.json('Salir');
};

exports.requiresLogin = function (req, res, next) {

    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};

exports.hasAuthorizationSG = function (req, res, next) {
    if (req.user.role === 'SG') {
        return next();
    } else {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
};

exports.hasAuthorizationStaff = function (req, res, next) {
    if (req.user.role === 'STAFF' || req.user.role === 'SG') {
        return next();
    } else {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
};

exports.hasAuthorizationPresi = function (req, res, next) {
    if (req.user.role === 'PRESI' || req.user.role === 'SG') {
        return next();
    } else {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
};

exports.staffType = function (req, res, next) {
    return res.json(req.user.role)
};


exports.staffById = function (req, res, next, id) {
    Staff.findById({_id: id})
        .exec(function (err, staff) {
            if (err) return next(err);
            if (!staff) return next(new Error('Failed to load Customer ' + id));
            req.staffD = staff;
            next();
        });
};

exports.me = function (req, res) {
    res.json(req.user || null);
};