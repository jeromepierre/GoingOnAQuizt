var express = require("express");
const categories = require("../models/categories");
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let categoriesDropdown = [];
  categories.categories.map((category) => {
    categoriesDropdown.push({ id: category.id, item: category.name });
  });
  res.send(categoriesDropdown);
});

module.exports = router;
