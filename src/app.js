require ('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie} = require('./movies/function');
const {findMovie} = require('./movies/function');

async function app(yargsinput) {
    if (yargsinput.create) {
        await createMovie({title:yargsinput.title, actor: yargsinput.actor, director: yargsinput.director, starRating: yargsinput.starRating});
    } else if (yargsinput.read) {
        await findMovie(yargsinput.findMovie)
    } else if (yargsinput.update) {

    } else if (yargsinput.delete) {

    } else {
        console.log("Unrecognised Operation")
    }
    await mongoose.disconnect();
};

app(yargs.argv);