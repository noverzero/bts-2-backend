'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')
var convertTime = require('convert-time')
const nodemailer = require('nodemailer')
const EMAIL_PASS = process.env.EMAIL_PASS
//var stripeSecretKey = process.env.STRIPE_SECRETKEY;
var stripeSecretKey = process.env.STRIPE_LIVESECRETKEY
//var stripePublicKey = 'pk_test_J0CdRMCGmBlrlOiGKnGgUEwT'
var stripePublicKey = 'pk_live_WZRwtpLAFcufugeQKbtwKobm'
const stripe = require('stripe')(stripeSecretKey);



//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('orders')
    .select('*')
  .then((data) => {
    res.status(200).json(data)
  })
})


//Get All reservations associated with a userId (passed in as req.params.id)
router.get('/:id', function(req, res, next){
  knex('orders')
  .select('orderedByFirstName', 'orderedByLastName', 'orderedByEmail', 'userId', 'orderId', 'willCallFirstName', 'willCallLastName', 'status', 'lastBusDepartureTime', 'firstBusLoadTime', 'city', 'locationName', 'streetAddress', 'date', 'venue', 'headliner', 'support1', 'support2', 'support3', 'headlinerBio', 'headlinerImgLink' )
  .join('reservations', 'orders.id', '=', 'reservations.orderId')
  .select('reservations.id as reservationsId')
  .join('pickup_parties', 'reservations.pickupPartiesId', '=', 'pickup_parties.id')
  .join('pickup_locations', 'pickup_locations.id', '=', 'pickup_parties.pickupLocationId')
  .join('events', 'events.id', '=', 'pickup_parties.eventId')
  .select('events.id as eventsId')
  .orderBy('date')
  .where('orders.userId', req.params.id)
  .then((data) => {
    res.status(200).json(data)
  })
})


//Read (get one of the resource)
// Get One
// router.get('/:id', function(req, res, next){
//   knex('orders')
//     .select('id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail')
//     .where('id', req.params.id)
//   .then((data) => {
//     res.status(200).json(data[0])
//   })
//   .catch(err => {
//     res.status(400).json(err)
//   })
// })

//POST ROUTE ORDERS
router.post('/', function (req, res, next) {
  const {
    userId,
    pickupLocationId,
    eventId,
    firstName,
    lastName,
    willCallFirstName,
    willCallLastName,
    email,
    orderedByPhone,
    ticketQuantity,
    discountCode
  } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'updates@bustoshow.org',
      pass: EMAIL_PASS
    }
  });

const confirmatonDetailsQuery = () =>{
return knex('pickup_parties')
  .join('events', 'events.id', '=', 'pickup_parties.eventId')
  .join('pickup_locations', 'pickup_locations.id', '=', 'pickup_parties.pickupLocationId')
  .where('eventId', eventId)
  .where('pickupLocationId', pickupLocationId)
  .select('events.date', 'events.headliner', 'events.venue', 'pickup_locations.locationName', 'pickup_locations.streetAddress', 'firstBusLoadTime', 'lastBusDepartureTime')
  .then((data)=>{
    return data[0]
    })
  }
  let newPickupPartyId
  let newOrderId
  const currentEventId = req.body.eventId
  let userDiscountCode = req.body.discountCode ? req.body.discountCode : null
  if (!firstName || !lastName || !email) {
    res.status(404).send('Please include first name, last name, and email!')
    return null
  }
  if (!pickupLocationId || !eventId || !ticketQuantity) {
    res.status(404).send('Please include pickup location, event, and ticket quantity!')
    return null
  }
  knex('orders')
    .insert({
      userId: userId,
      orderedByFirstName: firstName,
      orderedByLastName: lastName,
      orderedByEmail: email,
      orderedByPhone
    })
    .returning('*')
    .then((newOrder) => {
      newOrderId = newOrder[0].id
      return newOrderId
    })
    .then((newOrderId) => {
      knex('pickup_parties')
        .where({
          eventId: eventId,
          pickupLocationId: pickupLocationId,
        })
        .returning('*')
        .then((newPickupParty) => {
          newPickupPartyId = newPickupParty[0].id
          let newOrdersArr = [newOrderId, newPickupPartyId]
          return newOrdersArr
        })
        .then((ordersArr) => {
          let ticketQuantity = req.body.ticketQuantity
          let reservationsArr=[]
          for(let ii = 0; ii < ticketQuantity; ii++){
            reservationsArr.push({
                  orderId: ordersArr[0],
                  pickupPartiesId: ordersArr[1],
                  willCallFirstName: req.body.willCallFirstName,
                  willCallLastName: req.body.willCallLastName,
                  discountCodeId: null
                })
          }
          knex('reservations')
            .insert(reservationsArr)
            .returning('*')
            .then((newReservation) => {
              res.status(200).json(newReservation[0])
            })
          })
        .then( async ()=>{
          let result = await confirmatonDetailsQuery()
          result.email = email
          transporter.sendMail({
              from: 'updates@bustoshow.org',
              to: result.email,
              subject: 'Your Bus to Show Order Confirmation',
              text: `Thank you for riding with Bus to Show!  You have reserved ${ticketQuantity} round-trip seat(s) departing from ${result.locationName} : ${result.streetAddress} and going to ${result.headliner} at ${result.venue} on ${result.date}. The currently scheduled last call time is ${convertTime(result.lastBusDepartureTime)}, and if we have enough demand for multiple buses, we will usually start loading the first bus 30-60 min earlier, and sending them out as soon as they are full.  PLEASE NOTE: Time adjustments do occasionally happen.  The most recently updated departure time ranges are always current on the website.  So, when the event gets closer, please go to the website again and double check the times. There are no refunds for missing the bus. With that said, we try never move last call times earlier unless it is an emergency, and if that happens, we will send lots of communication with lots of advance notice, and give you an opportunity to cancel if the new time doesn't work for you. Otherwise, just bring the ID of the person who ordered the tickets (${firstName} ${lastName}) or, if applicable, the person you chose for will call (${willCallFirstName} ${willCallLastName}...(defaults to ordered by name if you left it blank)) to the departure location, and be ready to have a great time!`
              }, function(error, info){
            if (error) {
            } else {
            }
          })
          })
          .catch(err => {
            res.status(400).json(err)
        })
      })
    })


//PATCH ROUTE ORDERS
router.patch('/:id', function(req, res, next){
  knex('orders')
    .where('id', req.params.id)
    .update(req.body)
    .returning(['id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//Delete (delete one of the resource)
// router.delete('/:id', function(req, res, next){
//   knex('orders')
//     .where('id', req.params.id)
//     .del('*')
//     .returning(['id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail'])
//   .then((data) => {
//     res.status(200).json(data[0])
//   })
// })

router.post('/charge', async(req, res) => {
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken.id,
  })
  .then(customer =>{
    stripe.charges.create({
        amount: req.body.amount,
        description: req.body.eventId,
        currency: 'usd',
        customer: customer.id,
        metadata: req.body.metadata
      }, (err, charge) => {
        if (err) {
          return res.json(err)
        }

        return res.json(charge)
      }
    )
  })
})

module.exports = router;
