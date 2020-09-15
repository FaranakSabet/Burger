var express = require("express");
var burger = require("../model/burger.js");

var router = express.router();
router.get("/", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.updateOne({ devoured: req.body.devoured }, condition, function (
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//Deleatig burgers from db

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function (result) {
    if (result.changedRows === 0) {
      return res.result(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
