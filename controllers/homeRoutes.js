const router = require('express').Router();
const db = require(`../models`);
const loggedIn = require(`../utils/auth/loggedIn`);
const loggedOut = require(`../utils/auth/loggedOut`);

router.get(`/`,loggedIn, (req,res) => {
  res.send(`hello`)
})


module.exports = router;
