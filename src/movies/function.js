const MovieCollection = require('./model');
const TvCollection = require('./model2')

//create movie - DONE
async function createMovie(movieObject) {
    try {
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    };
};

//delete movie - DONE
async function deleteMovie(toDelete) {
    try {
        const delMovie = await MovieCollection.deleteOne(toDelete);
        console.log('Deleting movie...');
    } catch (error) {
        console.log(error);
    };
};

// //list movies - DONE
// async function listMovies() {
//     try {
//         return await MovieCollection.find({});
//     } catch (error) {
//         console.log(error);
//     };
// };

//update actor - DONE
async function updateActor(title, newActor) {
    try {
        return await MovieCollection.updateOne({title: title} ,{actor: newActor});
    } catch (error) {
        console.log(error);
    };
};

//update director - DONE
async function updateDirector(title, newDirector) {
    try {
        return await MovieCollection.updateOne({title: title} ,{director: newDirector});
    } catch (error) {
        console.log(error);
    };
};

//create TV show
async function createTvShow(tvShowObject) {
    try {
      const newTvShow = await TvCollection.create(tvShowObject);
      console.log(newTvShow);
    } catch (error) {
      console.log(error);
    };
  };


module.exports = {createMovie, deleteMovie, updateActor, updateDirector, createTvShow};