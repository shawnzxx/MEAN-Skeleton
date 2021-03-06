/**
 * Created by shawn.zhang on 9/12/2015.
 */

// Invoke 'strict' JavaScript mode
'use strict';

//set up env variable to the node default value, if node default value not been set we set one
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');


// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

//tell app to check port setting if not set then use 3030
var port = process.env.PORT || 3030;
app.listen(port);

// Log the server status to the console
console.log('Server running at http://localhost:' + port + "...");