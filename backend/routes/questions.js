var express = require('express');
const categories = require("../models/categories");
const categoriesIdLess = require("../models/categories");
var configureRound = require("../models/quizzRound.js");
var createQuestions = require("../models/gameSession");
const asyncMiddleware = require('../utils/asyncMiddleware');
const getStringArray = require('../utils/getStringArray');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', asyncMiddleware.asyncMiddleware(async (req, res, next) => {
    let round;
    console.log("req: ", req.body);
    console.log("difficulties: ", req.body.difficulties);
    console.log("numberOfQuestions: ", req.body.numberOfQuestions);
    round = {
        "categories": req.body.categories && getStringArray.getStringArray(req.body.categories) > 0 ? getStringArray.getStringArray(req.body.categories) : categoriesIdLess.categoriesIdLess,
        "difficulties": req.body.difficulties && getStringArray.getStringArray(req.body.difficulties).length > 0 ? getStringArray.getStringArray(req.body.difficulties) : ["hard", "medium", "easy"],
        "numberOfQuestions": req.body.numberOfQuestions ? req.body.numberOfQuestions : 10,
        "modus": req.body.modus
    };
    let categoriesNumber = [];
    for (const [key, value] of Object.entries(round.categories)) {
        categoriesNumber.push(categories.categories.find(x => x.name === value).id);
    }
    let configuredRound = configureRound.configureRound(round);
    let createdQuestions = await createQuestions.createQuestions(configuredRound, categoriesNumber);
    res.send(createdQuestions);

}));

module.exports = router;