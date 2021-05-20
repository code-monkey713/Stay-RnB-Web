const router = require(`express`).Router();
const db = require(`../../models`);

// Get all listings
router.get("/", async (req, res) => {
  try {
    const getListing = await db.Listings.find({});
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new listing
router.post(`/`, async (req, res) => {
  try {
    // console.log("First step")
    // req.body.user = req.session.userId;
    // const newListing = await db.Listings.create(req.body);
    // await db.User.findOneAndUpdate({_id: req.session.userId}, { $push: { listings: newListing._id } }, { new: true })
    // console.log("Last step")
    // res.status(200).json(newListing);
    return res.status(200).send("Hello World");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
