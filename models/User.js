const mongoose = require(`mongoose`);
const { Schema } = mongoose;

const UserSchema = new Schema({
<<<<<<< HEAD
    username: {
        type: String,
        trim: true,
        required: [true, `Please enter a valid username.`],
        unique: [true, `This username is already taken.`],
    },
    password: {
        type: String,
        trim: true,
        required: [true, `Please enter a valid password`],
        minlength: [8, `Password must be at least 8 characters.`],
        select: false,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: [true, `This email is already taken`],
        required: [true, `Please enter a valid e-mail address`],
        match: [/.+@.+\..+/, `Please enter a valid e-mail address`],
    },
    userCreated: {
        type: Date,
        default: Date.now(),
    },
    zip: {
      type: Number
    },
=======
  username: {
    type: String,
    trim: true,
    required: [true, `Please enter a valid username.`],
    unique: [true, `This username is already taken.`],
  },
  password: {
    type: String,
    trim: true,
    required: [true, `Please enter a valid password`],
    minlength: [8, `Password must be at least 8 characters.`],
    select: false,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: [true, `This email is already taken`],
    required: [true, `Please enter a valid e-mail address`],
    match: [/.+@.+\..+/, `Please enter a valid e-mail address`],
  },
  userCreated: {
    type: Date,
    default: Date.now(),
  },
  zip: {
    type: Number,
  },
>>>>>>> 2294b999fa5326b3ef9506eca7e5c239252f569d
});

const User = mongoose.model(`User`, UserSchema);

module.exports = User;
