'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')

//List (get all of the resource)
router.get('/', function(req, res, next) {
  knex('discount_codes')
    .select('id', 'discountCode', 'percentage', 'expiresOn', 'issuedOn', 'issuedTo', 'issuedBy', 'issuedBecause', 'timesUsed', 'type', 'remainingUses', 'usesPerEvent')
  .then((data) => {
    res.status(200).json(data)
  })
})


//Read (get one of the resource)
// Get One
router.get('/:discountCode', function(req, res, next) {
  knex('discount_codes')
  .join('discount_codes_events', 'discount_codes.id', 'discount_codes_events.discountCodeId')
  .join('events', 'discount_codes_events.eventsId', 'events.id')
  .select('discountCode', 'percentage', 'expiresOn', 'eventsId', 'remainingUses')
  .where('discountCode', req.params.discountCode)
  .then((data) => {
    console.log('data', data)
    res.status(200).json(data)
  })
})

//Create (create one of the resource)
router.post('/', function(req, res, next) {
  knex('discount_codes')
    .insert(req.body)
    .returning(['id', 'discountCode', 'percentage', 'expiresOn', 'issuedOn', 'issuedTo', 'issuedBy', 'issuedBecause', 'timesUsed', 'type', 'remainingUses', 'usesPerEvent'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//restore discount code remaining uses after timer expires on abandoned checkout.
router.patch('/return/:id', function(req, res, next){
  let id = req.params.id

  knex('discount_codes')
    .join('discount_codes_events', 'discount_codes.id', 'discount_codes_events.discountCodeId')
    .join('events', 'discount_codes_events.eventsId', 'events.id')
    .where('discount_codes.id', id)
    .select('*')
    .first()
  .then((match) => {
    let currentRemainingUses=match.remainingUses
    let timesUsed=req.body.timesUsed

    knex('discount_codes')
      .where('id', id)
      .increment('remainingUses', timesUsed)
    .then(data=>{
      res.status(200).json(data)
      console.log(data)
    })
  })
  .catch(error=>{
    return res.status(500).json({message: 'internal server error, discount code:Patch'})
  })
})



//check user entered discount code against database then return code id, new price, and remaining uses.
router.patch('/:discountCode', function(req, res, next) {
  let discountCode = req.params.discountCode
  let totalPrice = req.body.totalPrice
  let ticketQuantity = req.body.ticketQuantity
  let eventsId = req.body.eventId
  let ticketsAndUses=[]
  let afterDiscountObj={
    ticketQuantity: ticketQuantity,
    eventsId: eventsId,
    totalPrice: totalPrice
  }

  knex('discount_codes')

    .join('discount_codes_events', 'discount_codes.id', 'discount_codes_events.discountCodeId')
    .join('events', 'discount_codes_events.eventsId', 'events.id')
    .select('discountCode', 'percentage', 'expiresOn', 'eventsId', 'remainingUses')
    .where('discountCode', discountCode)
    //.first()
  .then((data) => {
    console.log('data', data)
    //res.status(200).json(data)
  })
  .returning(['id', 'remainingUses', 'totalPriceAfterDiscount', 'timesUsed'])
})

//Delete (delete one of the resource)
router.delete('/:id', function(req, res, next) {
  knex('discount_codes')
    .where('id', req.params.id)
    .del('*')
    .returning(['id', 'discountCode', 'percentage', 'expiresOn', 'issuedOn', 'issuedTo', 'issuedBy', 'issuedBecause', 'timesUsed', 'type', 'remainingUses', 'usesPerEvent'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

module.exports = router;
