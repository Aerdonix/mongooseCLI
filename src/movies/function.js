const movieCollection = require("./model")

async function createMovie(movieObject) {
    try {
        const newMovie = await movieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error)
    }
};

module.exports = {createMovie};

async function findMovie(title, actor, director, starRating) {
    try {
      const query = {};
      if (title) query.title = title;
      if (actor) query.actor = actor;
      if (director) query.actor = actor;
      if (starRating) query.title = title;

      const finder = await movieCollection.find(query);
      console.log(finder);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {findMovie};