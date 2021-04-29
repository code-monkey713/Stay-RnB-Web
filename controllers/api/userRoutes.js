const router = require('express').Router();
const db = require(`../../models`);
const bcrypt = require(`bcrypt`);

// Create new user
router.post(`/`, async (req, res) => {
  try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const newUser = await db.User.create(req.body);
      req.session.userId = newUser._id
      res.status(200).json(newUser);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// Logging in
router.post('/login', async (req, res) => {
  try {
      const userData = await db.User.findOne({ email: req.body.email }).select(`password email username`);
      if (!userData) {
          res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
          return;
      }
      bcrypt.compare(req.body.password, userData.password, (err, isMatching) => {
          if (err) {
              console.log(err);
          } else if (isMatching) {
              req.session.userId = userData._id;
              req.session.save(() => {
                  req.session.loggedIn = true;
                  res.json({ user: userData, message: 'You are now logged in!' });
              });
              console.log(`successful login!`)
          } else {
              res.status(400).json({ message: 'Incorrect email or password, please try again' });
              return;
          }
      })
  } catch (err) {
      res.status(400).json(err);
  };
});

// Logging out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  };
});

// Get user with listings
router.get(`/`, async (req, res) => {
  try {
      const getUser = await db.User.findOne({ _id: req.session.userId }).populate(`listings`);
      res.status(200).json(getUser);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
})

module.exports = router;