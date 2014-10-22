/**
 * Created by frederikolesen on 22/10/14.
 */

var mongoose = require('mongoose');

module.exports.connect = function () {
    //mongoose.connect("mongodb://localhost/test");

    mongoose.connect("mongodb://Admin:Admin123@ds063779.mongolab.com:63779/firsttest")

    var db = mongoose.connection;

    db.once('open', function () {
        console.log("Connected");
    });

    db.once('error', function (err) {
        console.log(err);
    });

    db.once('close', function () {
        console.log("Connection closed");
    });
};

module.exports.close = function () {
    mongoose.connection.close();
};