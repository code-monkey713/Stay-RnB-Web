const router = require('express').Router();
const db = require(`../models`);
const loggedIn = require(`../utils/auth/loggedIn`);
const loggedOut = require(`../utils/auth/loggedOut`);

router.get(`/`,loggedIn, (req,res) => {
  res.send(`Welcome to the Stay-RnB server, used for storing Stay-RnB data.`)
})

// Get user
router.get(`/users`, async (req, res) => {
  try {
    const getUser = await db.User.find({})
    res.status(200).json(getUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get user by id
router.get(`/users/:id`, async (req, res) => {
  try {
    const id = req.params.id;
    const getUser = await db.User.findOne({ _id: id}).populate(`listings`);
    res.status(200).json(getUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get listings by id
router.get(`/listings/:id`, async (req, res) => {
  try {
    const id = req.params.id;
    const getListing = await db.Listings.findOne({ _id: id}).populate(`user`);
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get listings by zip code
router.get(`/listings/zip/:zip`, async (req, res) => {
  try {
    const zip = req.params.zip;
    const getListing = await db.Listings.findOne({ zip: zip}).populate(`user`);
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;