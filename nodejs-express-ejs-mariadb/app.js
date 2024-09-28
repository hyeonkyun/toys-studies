var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pool = require("./config");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var crunRouter = require('./routes/crud');
var saveRouter = require('./routes/save');
var showRouter = require('./routes/show');
var updateRouter = require('./routes/update');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crud', crunRouter);
app.use('/insert', crunRouter);
app.use('/save', saveRouter);
app.use('/show', showRouter);
app.use('/update', updateRouter);

app.post('/updatesave', function(req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.contact;
  var designation = req.body.designation;
  // res.send(id+name+email+contact);
  pool.query("UPDATE employee set name=?, email=?,contactNo=?,designation=? where id=?",[name,email,contact,designation,id],function(err,rows,fields){
    if(!!err) {
      console.log('Error' ,+err);
    } else {
      console.log('ok');
      //res.json({"ResponseCode":"1","ResponseMessage":"Data Updated Successfully","data":rows});
      res.redirect("/show");
    }
  });
});

app.get('/delete',function(req,res){
  var id = req.query.id;
  pool.query("delete from employee where id=?",[id],function(err,rows,fields){
    if(!!err) {
      console.log('Error' ,+err);
    } else {
      console.log("record deleted");
      return res.redirect('/show');
      //res.json({"ResponseCode":"1","ResponseMessage":"Record deleted successfully!","data":rows});
    }
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;