var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config()
var schedule = require('node-schedule')

//var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events');
var pickupLocationsRouter = require('./routes/pickup_locations');
var usersRouter = require('./routes/users');
var discountCodesRouter = require('./routes/discount_codes');
var ordersRouter = require('./routes/orders');
var pickupPartiesRouter = require('./routes/pickup_parties');




var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/events', eventsRouter);
app.use('/pickup_locations', pickupLocationsRouter);
app.use('/users', usersRouter);
app.use('/discount_codes', discountCodesRouter);
app.use('/orders', ordersRouter);
app.use('/pickup_parties', pickupPartiesRouter);




module.exports = app;
