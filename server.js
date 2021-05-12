const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const bcrypt = require(`bcrypt`);

const PORT = 3001;

const db = require(`./models`);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

mongoose.connect(`mongodb://localhost/Stay_RnB`, { useNewUrlParser: true });

app.post(`/api/users`, async (req,res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        const newUser = await db.User.create(req.body);
        res.status(200).json(newUser);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }

})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`)
});