const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const ListingsSchema = new Schema({
  name: {
    type: String,
    required: [true, `Please enter a name.`],
    trim: true,
  },
  zip: {
    type: Number,
    required: [true, `Please enter a valid zip code.`],
    trim: true,
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
    type: String,
    required: [true, `Please enter a valid state.`],
  },
  price: {
    type: Number,
    required: [true, `Please enter a price.`],
  },
  bedrooms: {
    type: Number,
    required: [true, `Please select a number of bedrooms.`],
  },
  beds: {
    type: Number,
    required: [true, `Please select a number of beds.`],
  },
  bathrooms: {
    type: Number,
    required: [true, `Please select a number of bathrooms.`],
  },
  pets: {
    type: String,
    default: "No",
  },
  smoking: {
    type: String,
    default: "No",
  },
  numberOfGuests: {
    type: Number,
    required: [true, `Please select a number of guests.`],
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