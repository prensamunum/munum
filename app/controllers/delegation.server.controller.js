var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Delegation = mongoose.model('delegations');
    Delegate = mongoose.model('delegate');

exports.create = function (req, res, next) {
    var delegation= new Delegation(req.body);
    console.log(delegation);
    delegation.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(delegation);
        }
    });
};

exports.list = function (req, res, next) {
    Delegation.find({}, function(err, delegations) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(delegations);
        }
    })
}

exports.findOne = function (req, res, next) {
    Delegation.findById({_id: req.body.id})
        .exec(function (err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load Customer ' + id));
            else res.json(user);
        });
};

exports.delete = function (req, res) {
    var delegation = req.delegationD;
    delegation.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(delegation);
        }
    });
};

exports.update = function (req, res, next) {
    var delegation=req.delegationD;
    Delegation.findByIdAndUpdate(delegation._id, req.body, function (err, delegationRes) {
        if (err) {
            return (next(err));
        } else {
            res.json(delegationRes);
        }
    })
}

exports.delegationCode = function (req, res, next) {

    Delegation.findOne({code: req.body.code})
        .exec(function (err, user) {
            console.log(user);
            if (err) return next(err);
            else res.json(user);
        });
};

exports.delegateByDelegation = function (req, res, next) {
    Delegate.find({code: req.body.code})
        .exec(function (err, users) {
            if (err) return next(err);
            else res.json(users);
        });
};

exports.deleagationById = function (req, res, next, id) {
    Delegation.findById({_id: id})
        .exec(function (err, delegation) {
            if (err) return next(err);
            if (!delegation) return next(new Error('Failed to load Customer ' + delegation));
            req.delegationD = delegation;
            next();
        });
};
