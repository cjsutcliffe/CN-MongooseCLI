
const mongoose = require ('mongoose');

const tvModel = new mongoose.Schema ({
    tvshow: {
        type: String,
        unique: true,
        required: true
    },
    tvactor: {
        type: String,
        default: "Actor not specified"
    },
    tvdirector: {
        type: String,
        default: "Director not specified"
    },
    tvrating: {
        type: Number,
        default: "0.0"
    }
});

const TvCollection = mongoose.model("Mongoose TV Shows", tvModel);

module.exports = TvCollection;