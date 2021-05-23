const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
const Highscore = require('../models/highscore.model');
const asyncMiddleware = require("../utils/asyncMiddleware");

const mongooseLink = "mongodb+srv://admin:1234@cluster0.j4pzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

/* GET users listing. */
router.get('/', asyncMiddleware.asyncMiddleware(async (req, res, next) => {
    mongoose.connect(mongooseLink, {useNewUrlParser: true});
    const all = await Highscore.find();
    res.send(all);
}));

router.post('/', function(req, res, next) {
    mongoose.connect(mongooseLink, {useNewUrlParser: true});
    console.log(req.body);
    let highscore = new Highscore();
    highscore.username = req.body.username;
    highscore.score = req.body.score;
    highscore.date = req.body.date;
    console.log(Highscore);
    highscore.save().then((response) => res.send(response));
});

module.exports = router;
