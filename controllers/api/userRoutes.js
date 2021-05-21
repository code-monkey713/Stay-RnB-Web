const router = require("express").Router();
const db = require(`../../models`);
const bcrypt = require(`bcrypt`);

// Create new user
router.post(`/`, async (req, res) => {
  try {
    req.body.data.password = await bcrypt.hash(req.body.data.password, 10);
    const newUser = await db.User.create(req.body.data);
    await db.Host.create(req.body.data);
    req.session.userId = newUser._id;
    req.session.loggedIn = true;
    res.status(200).json({ user: newUser, message: "New user created" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logging in
router.post("/login", async (req, res) => {
  try {
    if (req.body.data.host === false) {
      const userData = await db.User.findOne({
        email: req.body.data.email,
      }).select(`password email username`);
      req.session.save(() => {
        req.session.host = false;
      });
      handleLogin(req, res, userData);
    } else {
      const userData = await db.Host.findOne({
        email: req.body.data.email,
      }).select(`password email username`);
      req.session.save(() => {
        req.session.host = true;
      });
      handleLogin(req, res, userData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Logging out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Get user by id
router.get("/", async (req,res) => {
  try {
    if (req.session.host === false) {
      const getUser = await db.User.findById(req.session.userId);
      res.status(200).json(getUser);
    } else {
      const getUser = await db.Host.findById(req.session.userId).populate('listings');
      res.status(200).json(getUser);
    }
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})

const handleLogin = (req, res, userData) => {
  if (!userData) {
    res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" });
    return;
  }
  bcrypt.compare(
    req.body.data.password,
    userData.password,
    (err, isMatching) => {
      if (err) {
        console.log(err);
      } else if (isMatching) {
        req.session.save(() => {
          req.session.userId = userData._id;
          req.session.loggedIn = true;
          res.json({ user: userData, message: "You are now logged in!" });
        });
        console.log(`successful login!`);
      } else {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
    }
  );
};

module.exports = router;
