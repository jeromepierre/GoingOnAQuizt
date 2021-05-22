var express = require('express');
const categories = require("../models/categories");
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(categories.categories);
});

module.exports = router;