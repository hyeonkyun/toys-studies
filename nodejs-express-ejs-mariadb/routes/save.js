var express = require('express');
var router = express.Router();
var pool = require("../config");

/* GET users listing. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.contact;
  var designation = req.body.designation;
  pool.query("insert into employee(name,email,contactNo,designation) values(?,?,?,?) ",[name,email,contact,designation],function(err,rows,fields){
    if(!!err) {
      console.log("error", +err);
    } else {
       //res.json({"ResponseCode":"1","ResponseMessage":"success","data":"Data Inserted Successfully!"});
       res.redirect("/show");
    }
  });
});

module.exports = router;
