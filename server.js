const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);

const PORT = 3000;

const db = require(`./models`);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

mongoose.connect(`mongodb://localhost/Stay_RnB`, { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`)
});