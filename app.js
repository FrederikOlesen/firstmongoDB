/**
 * Created by frederikolesen on 22/10/14.
 */

var model = require('./module.js');

var mongo = require('./mongo.js');

mongo.connect();

var person = new model.PersonModel({name: 'Frederik', age: 25});
person.save(function (err, person) {
    if (err) {
        console.log(err)
    } else {
        console.log(person + " saved.")
    }
    mongo.close();
});

//model.PersonModel.find({name: 'Frederik'}, function (err, persons) {
//    console.log(persons);
//    mongo.close();
//})