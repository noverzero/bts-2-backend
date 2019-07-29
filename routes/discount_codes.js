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
router.get('/:id', function(req, res, next) {
  knex('discount_codes')
    .select('id', 'discountCode', 'percentage', 'expiresOn', 'issuedOn', 'issuedTo', 'issuedBy', 'issuedBecause', 'timesUsed', 'type', 'remainingUses', 'usesPerEvent')
    .where('id', req.params.id)
  .then((data) => {
    res.status(200).json(data[0])
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
    })
  })
  .catch(error=>{
    return res.status(500).json({message: 'internal server error, discount code:Patch'})
  })
})


router.patch('/', function(req, res, next) {
  console.log('req.body', req.body)
  let discountCode = req.body.discountCode
  let eventId = req.body.eventId
  knex('discount_codes')
  .where('discountCode', discountCode)
  .then((data) => {
         res.status(200).json(data)
       })

})
//check user entered discount code against database then return code id, new price, and remaining uses.
// router.patch('/', function(req, res, next) {
//   console.log('req.body', req.body)
//   let discountCode = req.body.discountCode
//   let totalPrice = req.body.totalPrice
//   let ticketQuantity = req.body.ticketQuantity
//   let ticketsAndUses=[]
//   let afterDiscountObj={}
//   afterDiscountObj.ticketQuantity=ticketQuantity
//   knex('discount_codes')
//
//     .join('discount_codes_events', 'discount_codes.id', 'discount_codes_events.discountCodeId')
//     .join('events', 'discount_codes_events.eventsId', 'events.id')
//     .select('*')
//     .where('discountCode', discountCode)
//     .first()
//   .then((match) => {
//     if (!match) {
//       return res.status(400).json({message: 'This code is not in our database.'})
//     }
//     else if(match){
//
//     afterDiscountObj.newRemainingUses=match.remainingUses
//
//     let expiration = Date.parse(match.expiresOn.toLocaleString('en-US'))
//     let today = Date.parse(new Date().toLocaleString('en-US', {
//         timeZone: 'America/Denver'
//       }
//     ))
//     if (expiration < today){
//       return res.status(400).json({message: 'This code has expired.'})
//     }
//     if (match.remainingUses <= 0) {
//       return res.status(400).json({message: 'This code is all used up.'})
//
//     }
//     let priceWithoutFeesPerTicket = totalPrice * 10 / 11 / ticketQuantity
//     let effectiveRate = (100 - match.percentage) / 100
//
//     if (match.remainingUses >= ticketQuantity) {
//       afterDiscountObj.timesUsed = ticketQuantity
//       afterDiscountObj.totalPriceAfterDiscount = priceWithoutFeesPerTicket * ticketQuantity * effectiveRate * 1.10
//       afterDiscountObj.newRemainingUses = match.remainingUses - ticketQuantity
//       return (afterDiscountObj)
//     }
//     if (match.remainingUses < ticketQuantity) {
//       afterDiscountObj.timesUsed = match.remainingUses
//       afterDiscountObj.totalPriceAfterDiscount = (priceWithoutFeesPerTicket * (ticketQuantity - match.remainingUses) + priceWithoutFeesPerTicket * effectiveRate * match.remainingUses) * 1.10
//       afterDiscountObj.newRemainingUses = 0
//       return afterDiscountObj
//     }
//   }
//   })
//   .then((afterDiscountObj) => {
//     if(afterDiscountObj.newRemainingUses || afterDiscountObj.newRemainingUses === 0 && afterDiscountObj.totalPriceAfterDiscount && afterDiscountObj.timesUsed  ){
//       knex('discount_codes')
//         .select('*')
//         .where('discountCode', discountCode)
//         .update({
//           remainingUses: afterDiscountObj.newRemainingUses,
//           totalPriceAfterDiscount: afterDiscountObj.totalPriceAfterDiscount,
//           timesUsed: afterDiscountObj.timesUsed
//         })
//         .returning(['id', 'remainingUses', 'totalPriceAfterDiscount', 'timesUsed'])
//       .then((data) => {
//         res.status(200).json(data)
//       })
//     }
//   })
// })

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
