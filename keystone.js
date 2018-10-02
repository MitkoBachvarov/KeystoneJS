let keystone = require('keystone');

keystone.init({
    'cookie secret' : 'secure',
    'name': 'KeystoneProject',
    'user model': 'User',
    'auto update': true,
    'auth': true,
    views: 'templates/views',
    'view engine': 'pug'
});

keystone.set('routes', require('./routes'));

keystone.import('models');

keystone.start();