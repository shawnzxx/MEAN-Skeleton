/**
 * Created by shawn.zhang on 14/12/2015.
 */

// Invoke 'strict' JavaScript mode
'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageSchema = new Schema({
    message: String
});

//create message model using schema
var Message = mongoose.model('Message', messageSchema);