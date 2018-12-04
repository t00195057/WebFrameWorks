const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gamename: {
        type: String,
    },

    description: {
        type: String,
    },


});

mongoose.model('games', gameSchema);