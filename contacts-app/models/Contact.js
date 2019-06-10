let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: false
    },
    phone: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    imageData: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Contact', ContactSchema);