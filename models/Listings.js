const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const ListingsSchema = new Schema({
  zip: {
    type: String,
    required: [true, `Please enter a valid zip code.`],
    trim: true,
    minLength: 5,
    maxLength: 5,
  },
  address: {
    type: String,
    required: [true, `Please enter a valid street address.`],
  },
  city: {
    type: String,
    required: [true, `Please enter a valid city.`],
  },
  state: {
    type: String,
    required: [true, `Please enter a valid state.`],
  },
  available: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String
  },
  price: {
    type: Number,
    required: [true, `Please enter a price.`],
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number
  },
  pets: {
    type: String
  },
  smoking: {
    type: String
  },
  numberOfGuests: {
    type: Number
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
  thumbnail: {
    type: String,
  },
  pictures: {
    type: Array,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

const Listings = mongoose.model(`Listings`, ListingsSchema);

module.exports = Listings;