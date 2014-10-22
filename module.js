/**
 * Created by frederikolesen on 22/10/14.
 */

var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports.PersonModel = mongoose.model('person', personSchema);