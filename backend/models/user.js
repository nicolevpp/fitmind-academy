const mongoose = require('mongoose');
// passwordHash: String,

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    routines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routines'
    }]
});

userSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;