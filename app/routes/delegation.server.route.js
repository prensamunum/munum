'use strict';

module.exports = function (app) {
    var delegation = require('../../app/controllers/delegation.server.controller');
    var staff = require('../../app/controllers/staff.server.controller');

    app.route('/oneDelegation')
        .post(staff.requiresLogin, staff.hasAuthorizationSG, delegation.findOne);
    app.route('/delegation')
        .get(staff.requiresLogin, staff.hasAuthorizationSG, delegation.list)
        .post(delegation.create)
    app.route('/delegation/:delegationId')
        .delete(staff.requiresLogin, staff.hasAuthorizationSG, delegation.delete)
        .put(staff.requiresLogin, staff.hasAuthorizationSG, delegation.update);
    app.route('/delegationCode')
        .post(delegation.delegationCode);
    app.route('/delegateByDelegation')
        .post(delegation.delegateByDelegation);

    app.param('delegationId', delegation.deleagationById);
}
