
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },


});

mongoose.model('profile', profileSchema);