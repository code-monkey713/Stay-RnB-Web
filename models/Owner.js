const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const OwnerSchema = new Schema({
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

const Owner = mongoose.model(`Owner`,OwnerSchema);

module.exports = Owner;