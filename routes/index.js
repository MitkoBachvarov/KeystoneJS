let keystone = require('keystone');
let importRoutes = keystone.importer(__dirname);  // The Keystone importer gives us a function that allows us to reduce a folder and its contents to an object with the same nesting.

let routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api')
};

/*
For each route we want, we add a new path and route function. In the example below, the path '/' (the default homepage) will be handled by routeFunction().
 */
exports = module.exports = function (app) {
    app.get('/', routes.views.index);
    app.get('/add-event', routes.views.addEvent);
    app.post('/api/event', routes.api.event.post);
};