const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/Stay_RnB`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const UserSeed = [
  {
    username: "jsoria",
    firstName: "Joseph",
    lastName: "Soria",
    password: "password",
    email: "email@email.com",
    userCreated: Date.now(),
    isOwner: false,
  },
  {
    username: "foobar",
    firstName: "foo",
    lastName: "bar",
    password: "password",
    email: "email@email2.com",
    userCreated: Date.now(),
  },
  {
    username: "barfoo",
    firstName: "bar",
    lastName: "foo",
    password: "password",
    email: "email@email3.com",
    userCreated: Date.now(),
    isOwner: true,
    owner: 1,
  },
  {
    username: "randy",
    firstName: "Random",
    lastName: "Guy",
    password: "password",
    email: "email@email4.com",
    userCreated: Date.now(),
    isOwner: true,
    owner: 2,
  }
];

const ListingSeed = [
  {
    zip: 77777,
    address: "11111 Random Street Ln",
    city: "Houston",
    state: "Tx",
    price: 1200,
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    pets: "Yes",
    smoking: "No",
    numberOfGuests: 4,
  }
];

const ReviewSeed = [
  {
    rating: 5,
    review: "This place was awesome!",
  }
]

async function seedUsers() {
  try {
    await db.User.deleteMany({});
    await db.User.collection.insertMany(UserSeed);
    console.log("Users successfully seeded!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function seedListings() {
  try {
    await db.Listings.deleteMany({});
    await db.Listings.collection.insertMany(ListingSeed)
    console.log("Listing seed complete!")
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function seedReviews() {
  try {
    await db.Reviews.deleteMany({});
    await db.Reviews.collection.insertMany(ReviewSeed);
    console.log("Reviews seed complete!")
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function seedAll() {
  await seedUsers();
  await seedListings();
  await seedReviews();

  console.log("Seeds complete, exiting process...")
  process.exit(0);
}

seedAll();