const router = require(`express`).Router();
const db = require(`../../models`);

// Create new listing
router.post(`/`, async (req, res) => {
  try {
      const newListing = await db.Owner.create(req.body);
      await db.User.findOneAndUpdate({_id: req.session.userId}, { $push: { listings: newListing._id } }, { new: true })
      res.status(200).json(newListing);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;