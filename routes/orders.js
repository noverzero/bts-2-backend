'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')
// var stripeSecretKey = process.env.STRIPE_SECRETKEY;
var stripeSecretKey = 'sk_test_UpJeVveXeyBBKiiJUcE4SWm6';
var stripePublicKey = 'pk_test_J0CdRMCGmBlrlOiGKnGgUEwT'
const stripe = require('stripe')(stripeSecretKey);


//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('orders')
    .select('id', 'pickupLocationId', 'eventId', 'reservationId', 'reservationWillCallName', 'discountCodeId', 'status')
  .then((data) => {
    res.status(200).json(data)
  })
})

//Read (get one of the resource)
// Get One
router.get('/:id', function(req, res, next){
  knex('orders')
    .select('id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail')
    .where('id', req.params.id)
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//POST ROUTE ORDERS
router.post('/', function(req, res, next){
  const {pickupLocationId, eventId, firstName, lastName, willCallFirstName, willCallLastName, email, ticketQuantity, discountCode}= req.body
  let newPickupPartyId
  let newOrderId
  const currentEventId=req.body.eventId
  let userDiscountCode = req.body.discountCode? req.body.discountCode : null
  if(!firstName || !lastName || !email){
      res.status(404).send('Please include first name, last name, and email!')
      return null
  }
  if(!pickupLocationId || !eventId || !ticketQuantity){
      res.status(404).send('Please include pickup location, event, and ticket quantity!')
      return null
  }
  knex('orders')
    .insert({
      orderedByFirstName: firstName,
      orderedByLastName: lastName,
      orderedByEmail: email
    })
    .returning(['id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail'])
  .then((newOrder) => {
    newOrderId=newOrder[0].id
    return newOrderId
  })
  .then((newOrderId)=>{
    knex ('pickup_parties')
      .where({
        eventId: eventId,
        pickupLocationId: pickupLocationId,
      })
      .decrement("capacity", ticketQuantity)
      .returning(['id', 'eventId', 'pickupLocationId', 'inCart', 'capacity'])
    .then((newPickupParty)=>{
      newPickupPartyId=newPickupParty[0].id
      let newOrdersArr=[newOrderId, newPickupPartyId]
      return newOrdersArr
    })
    .then((ordersArr)=>{
      knex('reservations')
        .insert({
          orderId: ordersArr[0],
          pickupPartiesId: ordersArr[1],
          willCallFirstName: req.body.willCallFirstName,
          willCallLastName: req.body.willCallLastName,
          discountCodeId: userDiscountCode
          })
        .returning(['id', 'pickupPartiesId', 'willCallFirstName', 'willCallLastName', 'status', 'discountCodeId'])
      .then((newReservation)=>{
        res.status(200).json(newReservation[0])
      })
    })
    .catch(err=>{
      res.status(400).json(err)
    })
  })
})

//POST ROUTE ORDERS
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
router.delete('/:id', function(req, res, next){
  knex('orders')
    .where('id', req.params.id)
    .del('*')
    .returning(['id', 'orderedByFirstName', 'orderedByLastName', 'orderedByEmail'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

router.post('/charge', async(req, res) => {
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken.id,
  })
  .then(customer =>{ 
    stripe.charges.create({
        amount: req.body.amount,
        description: 'example charge',
        currency: 'usd',
        customer: customer.id,
        receipt_email: customer.email
      }, (err, charge) => {
        if (err) {
          return err
        }
        console.log(res)
        return res.json(charge)
      }
    )
  })
})

module.exports = router;
