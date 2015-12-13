/**
 * Created by shawn.zhang on 13/12/2015.
 */

// Invoke 'strict' JavaScript mode
'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

var dbUrl = config.db;
module.exports = function () {
    //connection string
    var db = mongoose.connect(dbUrl);

    //register some events from MongoDB
    mongoose.connection.on('error', console.error.bind(console, 'connection error...'));
    mongoose.connection.once('open', function callback(){
        console.log('mean_cms db opened');
    });

    //Register the model Schema
    //require('../app/models/user.server.model');

    return db;
};