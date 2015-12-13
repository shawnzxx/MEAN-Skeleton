/**
 * Created by shawn.zhang on 13/12/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

// Define the Express configuration method
module.exports = function () {
    //create actually express application
    var app = express();

    //set up stylus compile function
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    //region Configuration section
    // Set the application view engine and 'views' folder
    //__dirname: The name of the directory that the currently executing script resides in.
    app.set('views', './server/views');
    app.set('view engine', 'jade');

    app.use(bodyParser());
    //open morgan middleware to logging
    app.use(logger('dev'));
    //open stylus middleware
    //if no static route to our public directory this wont work
    app.use(stylus.middleware({
            src: './public',
            compile: compile
        }
    ));
    //endregion

    // Load the 'index' routing file
    require('../server/routes/index.routes.js')(app);


    //Configure static file serving
    //ex: request /public/favicon.ico, then node just server this file
    app.use(express.static('./public'));

    // Return the Express application instance
    return app;
};