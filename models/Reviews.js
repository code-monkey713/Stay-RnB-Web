const mongoose = require(`mongoose`);
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  rating: {
    type: Number,
    min: 0.5,
    max: 5,
  },
  review: {
    type: String,
    required: [true, `Please enter a review`]
  },
  reviewDate: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  listingId: {
    type: Schema.Types.ObjectId,
    ref: "Listings",
  }
});

const Reviews = mongoose.model(`Reviews`, ReviewSchema);

module.exports = Reviews;