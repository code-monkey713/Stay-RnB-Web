const router = require(`express`).Router();
const db = require(`../../models`);

// Get listings by zip
router.get("/:zip", async (req, res) => {
  try {
    const getListing = await db.Listings.find({zip: req.query.zip});
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new listing
router.post(`/`, async (req, res) => {
  try {
    const newListing = await db.Listings.create(req.body.data);
    const userData = await db.Host.findOneAndUpdate({_id: req.session.userId}, { $push: { listings: newListing._id } }, { new: true })
    console.log(newListing)
    console.log(userData)
    res.status(200).json(newListing);
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
