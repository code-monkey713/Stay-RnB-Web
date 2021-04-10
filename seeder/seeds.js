const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(`mongodb://localhost/Stay_RnB`, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const UserSeed = [
    {
        username: `joey`,
        password: `password`,
        email: `email@email.com`,
        userCreated: Date.now(),
        isRenter: false,
        isOwner: false,
    },
    {
        username: `foo`,
        password: `password`,
        email: `email@email2.com`,
        userCreated: Date.now(),
        isRenter: true,
    },
    {
        username: `bar`,
        password: `password`,
        email: `email@email3.com`,
        userCreated: Date.now(),
        isOwner: true,
    },
];

db.User.deleteMany({})
.then(() => db.User.collection.insertMany(UserSeed))
.then(console.log(`Seed complete!`))
.catch(err => {
    console.log(err);
    process.exit(1);
});