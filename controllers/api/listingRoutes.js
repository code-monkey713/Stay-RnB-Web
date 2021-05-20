const router = require(`express`).Router();
const db = require(`../../models`);
const cors = require('cors');

// Get all listings
router.get("/", cors(), async (req, res) => {
  try {
    console.log("Hey")
    const getListing = await db.Listings.find({});
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new listing
router.post(`/`, cors(), async (req, res) => {
  console.log(req);
  try {
    // console.log("First step")
    // req.body.user = req.session.userId;
    // const newListing = await db.Listings.create(req.body);
    // await db.User.findOneAndUpdate({_id: req.session.userId}, { $push: { listings: newListing._id } }, { new: true })
    // console.log("Last step")
    // res.status(200).json(newListing);
    console.log("Heroku works!");
    console.log("Another one");
    return res.status(200).send("Hello World");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
  return res.status(200).send("Hello there");

});

//Delete a listing
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedListing = await db.Listings.deleteOne({ _id: id });
    res.status(200).json(deletedListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
