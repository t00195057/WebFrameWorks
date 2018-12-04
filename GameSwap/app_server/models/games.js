const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gamename: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    rating:{
      type: String,
        required:false,
    }
});