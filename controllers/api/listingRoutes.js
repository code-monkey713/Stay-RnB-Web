const router = require(`express`).Router();
const db = require(`../../models`);

// Create new listing
router.post(`/`, async (req, res) => {
  try {
      req.body.user = req.session.userId;
      const newListing = await db.Listings.create(req.body);
      await db.User.findOneAndUpdate({_id: req.session.userId}, { $push: { listings: newListing._id } }, { new: true })
      res.status(200).json(newListing);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

//Delete a listing
router.delete('/:id', async (req,res) => {
  try{
    const id = req.params.id;
    const deletedListing = await db.Listings.deleteOne({_id: id});
    res.status(200).json(deletedListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;