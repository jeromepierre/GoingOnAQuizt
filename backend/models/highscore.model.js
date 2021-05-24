const mongoose = require('mongoose');

const HighscoreSchema = new mongoose.Schema({
        username: {
            type: String,
        },
        score: {
            type: Number,
        },
        date: {
          type: Date,
        }
    }
);

module.exports = mongoose.model('Highscore',HighscoreSchema);