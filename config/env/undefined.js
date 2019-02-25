'use strict';
/*'mongodb://localhost/munum',*/
module.exports = {
    db: 'mongodb://munumuser:123456789@ds155490.mlab.com:55490/munumdb' || 'mongodb://localhost/munum',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'ejs'
};
