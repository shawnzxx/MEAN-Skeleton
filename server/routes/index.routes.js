/**
 * Created by shawn.zhang on 13/12/2015.
 */

// Invoke 'strict' JavaScript mode
'use strict';

var messageCtrl = require('../controllers/message.controller');

// Define the routes module' method
module.exports = function(app) {
    // Load the 'index' controller
    //var index = require('../controllers/index.server.controller');

    app.get('/partials/:partialPath', function(req, res){
        res.render('partials/' + req.params.partialPath);
    });

    //* mean all request dont have specific route setting will go index.html
    //and sent it back to client, let client decide which route page to go.
    //Typically we should make sure all route in client will also reflect on server too.
    app.get('/', messageCtrl.render);
};