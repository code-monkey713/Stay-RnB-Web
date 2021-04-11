const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(`mongodb://localhost/Stay_RnB`, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const UserSeed = [
    {
        username: `jsoria`,
        firstName: `Joseph`,
        lastName: `Soria`,
        password: `password`,
        email: `email@email.com`,
        userCreated: Date.now(),
        isRenter: false,
        isOwner: false,
    },
    {
        username: `foobar`,
        firstName: `foo`,
        lastName: `bar`,
        password: `password`,
        email: `email@email2.com`,
        userCreated: Date.now(),
        isRenter: true,
    },
    {
        username: `barfoo`,
        firstName: `bar`,
        lastName: `foo`,
        password: `password`,
        email: `email@email3.com`,
        userCreated: Date.now(),
        isOwner: true,
        owner: 1,
    },
];

const OwnerSeed = [
    {
        numberOfListings: 2,
        listings: [
            {
                name: `First Listing`,
                type: `Home`,
                zip: 77095,
                rooms: 3,
                bathrooms: 1,
                pets: `No`,
                smoking: `No`,
            },
            {
                name: `Second Listing`,
                type: `Apartment`,
                zip: 77084,
                rooms: 2,
                bathrooms: 1,
                pets: `No`,
                smoking: `Yes`,
            },
        ],
        userId: 1,
    },
];


db.User.deleteMany({})
.then(() => db.User.collection.insertMany(UserSeed))
.then(console.log(`User seed complete!`))
.catch(err => {
    console.log(err);
    process.exit(1);
});

db.Owner.deleteMany({})
.then(() => db.Owner.collection.insertMany(OwnerSeed))
.then(console.log(`Owner seed complete!`))
.catch(err => {
    console.log(err);
    process.exit(1);
});