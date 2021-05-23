const mongoose = require('mongoose');

const HighscoreSchema = new mongoose.Schema({
        username: {
            type: String,
        },
        score: {
            type: String,
        },
        date: {
          type: String,
        }
    }
);

module.exports = mongoose.model('Highscore',HighscoreSchema);