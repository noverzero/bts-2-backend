
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config()
var cron = require('node-cron')

var discountCodesEventsRouter = require('./routes/discount_codes_events')
var discountCodesRouter = require('./routes/discount_codes');
var eventsRouter = require('./routes/events');
var ordersRouter = require('./routes/orders');
var pickupLocationsRouter = require('./routes/pickup_locations');
var pickupPartiesRouter = require('./routes/pickup_parties');
var eventDataHandler = require('./eventDataHandler')
var app = express();

var reservationsRouter = require('./routes/reservations')

app.use(function(req, res, next) {
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

// app.use('/users', usersRouter);
app.use('/discount_codes_events', discountCodesEventsRouter);
app.use('/discount_codes', discountCodesRouter);
app.use('/events', eventsRouter);
app.use('/orders', ordersRouter);
app.use('/pickup_locations', pickupLocationsRouter);
app.use('/pickup_parties', pickupPartiesRouter);
app.use('/reservations', reservationsRouter);

app.use(function(req, res) {
  res.status(404).send('Not Found');
});

apiDataFunction = async () => {
  const allShowsObj = await eventDataHandler.getApiData()
  eventDataHandler.insertEventData(allShowsObj)
}

apiDataFunction() // commented out until we go live

let time = new Date()
cron.schedule('00 04 * * * *', async () => {
  // console.log('Cron!', time.getMinutes())
  apiDataFunction()
})

module.exports = app;
