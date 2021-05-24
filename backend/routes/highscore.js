const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const Highscore = require("../models/highscore.model");
const asyncMiddleware = require("../utils/asyncMiddleware");

const mongooseLink =
  "mongodb+srv://admin:1234@cluster0.j4pzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/* GET users listing. */
router.get(
  "/",
  asyncMiddleware.asyncMiddleware(async (req, res, next) => {
    mongoose.connect(mongooseLink, { useNewUrlParser: true });
    const all = await Highscore.find().sort({score: -1});
    res.send(all);
  })
);

router.get(
    "/weekly",
    asyncMiddleware.asyncMiddleware(async (req, res, next) => {
        let lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        mongoose.connect(mongooseLink, { useNewUrlParser: true });
        const all = await Highscore.find({date:{
                $lt: new Date(new Date().setHours(23,59,59)),
                $gte: new Date(lastWeek.setHours(0,0,0))
            }}).sort({score: -1})
        res.send(all);
    })
);

router.get(
    "/daily",
    asyncMiddleware.asyncMiddleware(async (req, res, next) => {
        mongoose.connect(mongooseLink, { useNewUrlParser: true });
        const all = await Highscore.find({date:{
                $gte: new Date(new Date().setHours(0,0,0)),
                $lt: new Date(new Date().setHours(23,59,59))
            }}).sort({score: -1})
        res.send(all);
    })
);

router.post("/", function (req, res, next) {
  mongoose.connect(mongooseLink, { useNewUrlParser: true });
  let highscore = new Highscore();
  highscore.username = req.body.username;
  highscore.score = req.body.score;
  highscore.date = req.body.date;
  highscore.save().then((response) => res.send(response));
});

module.exports = router;
