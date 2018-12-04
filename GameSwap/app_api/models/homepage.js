const mongoose = require('mongoose');

const HomePageSchema = new mongoose.Schema({
    description: {
        type: String,
    },
});

mongoose.model('homepage', HomePageSchema);