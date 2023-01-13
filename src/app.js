const yargs = require('yargs');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const {createMovie, deleteMovie, updateActor, updateDirector } = require ('./movies/function');
const MovieCollection = require('./movies/model');
require('./db/connection');

async function app (yargsInput) {
    if (yargsInput.create) {
        //DONE - code to add movie goes here
        const movieObject = {title: yargsInput.title, actor: yargsInput.actor, director: yargsInput.director, rating: yargsInput.rating};
        await createMovie(movieObject);

    } else if (yargsInput.read) {
        //code to list all movies goes here - not working
        const results = await MovieCollection.find({}); 
        for (let index = 0; index < results.length; index++) {
        const element = results[index];
        console.log(`${element.title} With ${element.actor} Directed by ${element.director}, Critics Rating:  ${element.rating}`);
        
        //Map method:
        //const mapElements = results.map((element));
        };

    } else if (yargsInput.updateActor) {
        //DONE - code to update actor goes here
        const toUpdate = yargsInput.title;
        const newActor= yargsInput.actor;
        // console.log(toUpdate);
        // console.log(newActor);
        await updateActor (toUpdate, newActor);
        console.log('Actor successfully updated');

    } else if (yargsInput.updateDirector) {
        //DONE - code to update director goes here
        const toUpdate = yargsInput.title;
        const newDirector= yargsInput.director;
        // console.log(toUpdate);
        // console.log(newDirector);
        await updateDirector (toUpdate, newDirector);
        console.log('Director successfully updated');

    } else if (yargsInput.updateRating) {
        //DONE - code to update rating goes here
        const toUpdate = yargsInput.title;
        const newRating= yargsInput.rating;
        // console.log(toUpdate);
        // console.log(newRating);
        await updateDirector (toUpdate, newRating);
        console.log('Rating successfully updated');

    } else if (yargsInput.delete) {
        //DONE - code to delete a movie goes here
        const toDelete = {title: yargsInput.title}
        await deleteMovie(toDelete);
        console.log((toDelete.title)," was deleted sucessfully");

    } else if (yargsInput.search) {
        // code to search
        console.log("Entering Search");
        // const results = await MovieCollection.find({title: yargsInput.title});
        //https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        //https://www.geeksforgeeks.org/mongodb-regex/
        const results = await MovieCollection.find({[yargsInput.key]:{$regex: yargsInput.filter}})
        // console.log(results);
          for (let index = 0; index < results.length; index++) {
            const element = results[index];
            console.log(`Found The Movie "${element.title}" With "${element.actor}" Directed by "${element.director}" Rating ${element.rating}`);    
            };

    } else {
        console.log("Command not recognised")
    };
    await mongoose.disconnect();
};

app(yargs.argv);