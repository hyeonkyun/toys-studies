var express = require('express');
var router = express.Router();
var pool = require("../config");

var edit=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.query.id != '') {
        pool.query("SELECT * FROM employee where id = ? ", [req.query.id], function (error, rows) {
            if (!!error) {
              console.log('edit Error' + error);
            } else {
              console.log('edit ok');              
              console.log(rows);   
              edit = rows;                   
            }
        });              
    } else {
        res.status(err.status || 500);
        res.render('error');
    }

    obj = {print: edit, req: edit};
    console.log(obj);
    res.render("update", obj);
});
  
module.exports = router;
  