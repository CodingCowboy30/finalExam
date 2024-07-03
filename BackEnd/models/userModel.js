/* eslint-disable no-undef */
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    // Lets say that we are making an app that is 18 and up for sign up. We can minimum value requirements using the options object
    age: {type: Number, require: true, min: 18},
    // INstead of just adding an email that is set to a data type of String lets require anyone that adds data to our database to at least give an email. To do this we add the options object. INstead of just declaring the data type we would set email to the options object and then set the type property to String. If you want to make something required you would set the required property to true.
    email: { type: String, require: true },
    // To set default value to a field on Schema we can use the "default" option
    picture: { type: String, default: 'basepictureurl.com'},
    // You can even set a field to boolean value(true/false)
    hasCar: Boolean,
    // We can set limits to the values that a field can take. We use the enum property to this
    registrationStatus: {type: String, enum: ['COMPLETED', 'PENDING', 'DENIED', 'INCOMPLETE'], default: 'INCOMPLETE'},
})


// The .model method expects us to give it 2 things.
// The first thing is the name of the model. PascalCase!
// The second thing is the newly created SChema
const User = mongoose.model('User', UserSchema)

// The last thing we must do is export! In order for us to use the new model we must export the model.
module.exports = User