var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Delegate = mongoose.model('delegate');

exports.create = function (req, res, next) {
    var delegate = new Delegate(req.body);

    delegate.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(delegate);
        }
    });
};

exports.list = function (req, res, next) {
    /*Delegate.find({}, function(err, delegate) {

    })*/
    Delegate
        .find()
        .sort('created')
        .sort('code')
        .exec(function (err, delegate) {
                if (err) {
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                } else {
                    res.json(delegate);
                }
            }
        )
}

exports.delete = function (req, res) {
    var delegate = req.delegateD;
    delegate.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(delegate);
        }
    });
};

exports.update = function (req, res, next) {
    console.log('hola');
    var user = req.delegateD;
    Delegate.findByIdAndUpdate(user._id, req.body, function (err, userRes) {
        if (err) {
            return (next(err));
        } else {
            console.log(res.json(userRes));
            res.json(userRes);
        }
    })
}

exports.qrUpdate = function (req, res, next) {
    console.log('hola')
    var user = req.delegateD;
    Delegate.findByIdAndUpdate(user._id, req.body, function (err, userRes) {
        if (err) {
            return (next(err));
        } else {
            //res.end(JSON.stringify(userRes));
            return res.json(userRes);
        }
    })
};


exports.findOne = function (req, res, next) {
    console.log('hola');
    Delegate.findById({_id: req.body.id})
        .exec(function (err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load Customer ' + id));
            else res.json(user);
        });
};

exports.delegatesByComittee = function (req, res, next) {
    Delegate.find({finalCommittee: req.body.committees})
        .exec(function (err, users) {
            //console.log(users);
            if (err) return next(err);
            else res.json(users);
        });
};


exports.delegateById = function (req, res, next, id) {
    Delegate.findById({_id: id})
        .exec(function (err, staff) {
            if (err) return next(err);
            if (!staff) return next(new Error('Failed to load Customer ' + id));
            req.delegateD = staff;
            next();
        });
};
