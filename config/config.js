/**
 * Created by shawn.zhang on 13/12/2015.
 */

// Invoke 'strict' JavaScript mode
'use strict';

//set up env variable to the node default value, if node default value not been set we set one
module.exports = require('./env/' + process.env.npm + '.js');