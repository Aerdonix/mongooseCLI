const mongoose = require('mongoose');
const { Number } = require('yargs');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    actor: {
        type: String,
        default: "Not Specified"
    },
    director: {
        type: String,
        default: "Not Specified"
    },
    starRating: {
        type: Number,
        default: "Not Rated Yet",
        min: 0,
        max: 5
    }
});

const movieCollection = mongoose.model("Movies", movieSchema);

module.exports = movieCollection;