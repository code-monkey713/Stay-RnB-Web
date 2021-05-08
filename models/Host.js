const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const HostSchema = new Schema({
    numberOfListings: {
        type: Number,
    },
    listings: {
        type: Array,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Host = mongoose.model(`Host`,HostSchema);

module.exports = Host;