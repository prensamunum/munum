'use strict';

module.exports = function(app) {
    var delegate = require('../../app/controllers/delegate.server.controller');
    var staff = require('../../app/controllers/staff.server.controller');

    /*Route para código QR*/
    app.route('/qrOneDelegate')
        .post( delegate.findOne);
    app.route('/qrDelegate')
        .get(delegate.list);
    app.route('/qrUpdateDelegate/:delegateId')
        .put(delegate.qrUpdate);

    /* Route Normal*/
    app.route('/oneDelegate')
        .post(staff.requiresLogin, staff.hasAuthorizationSG, delegate.findOne);
        //.post(delegate.findOne);
    app.route('/delegate')
        .get(staff.requiresLogin, staff.hasAuthorizationStaff,delegate.list)
        //.get(delegate.list)
        .post(delegate.create)
    app.route('/delegate/:delegateId')
        .delete(staff.requiresLogin, staff.hasAuthorizationSG, delegate.delete)
        .put(staff.requiresLogin, staff.hasAuthorizationSG, delegate.update);
    app.route('/delegatesByComittee')
        .post(staff.requiresLogin, staff.hasAuthorizationSG, delegate.delegatesByComittee)

    app.param('delegateId', delegate.delegateById);
}
