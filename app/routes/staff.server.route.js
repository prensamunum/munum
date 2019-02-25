'use strict';

module.exports = function (app) {
    var staff = require('../../app/controllers/staff.server.controller');

    app.route('/oneStaff')
        .post(staff.requiresLogin, staff.hasAuthorizationSG, staff.findOne);
    app.route('/staff')
        .get(staff.requiresLogin, staff.hasAuthorizationSG, staff.list)
    app.route('/staff/:staffId')
        .delete(staff.requiresLogin, staff.hasAuthorizationSG, staff.delete)
        .put(staff.requiresLogin, staff.hasAuthorizationSG, staff.update);
    app.route('/signup')
        .post(staff.signup);
    app.route('/signin')
        .post(staff.signin);
    app.route('/signout')
        .get(staff.signout);
    app.route('/type')
        .get(staff.requiresLogin, staff.staffType);
    app.route('/me')
        .get(staff.requiresLogin, staff.me);


    app.param('staffId', staff.staffById);
}
