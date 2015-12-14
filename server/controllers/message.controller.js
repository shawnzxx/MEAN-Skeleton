/**
 * Created by shawn.zhang on 14/12/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

var Message = require('mongoose').model('Message');
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

exports.render = function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    })
};