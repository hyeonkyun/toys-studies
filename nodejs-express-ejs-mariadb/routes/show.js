var express = require('express');
var router = express.Router();
var pool = require("../config");

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query("select * from employee", function (err, result) {
    if (err) throw err;
    else {
      obj = {print: result};
      console.log(obj);

      res.render("show", obj);
    }
  })
});

module.exports = router;
