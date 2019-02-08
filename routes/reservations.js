'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')

//List (get all of the resource)
router.get('/', function(req, res, next){
  knex('reservations')
    .select('id', 'orderId', 'pickupPartiesId', 'willCallFirstName', 'willCallLastName', 'status', 'discountCodeId')
  .then((data) => {
    res.status(200).json(data)
  })
})

//Read (get one of the resource)
// Get One
router.get('/:id', function(req, res, next){
  knex('reservations')
    .select('*')
    .where('userId', req.params.id)
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//Create (create one of the resource)
router.post('/', function(req, res, next){
  knex('reservations')
    .insert(req.body)
    .returning(['id', 'orderId', 'pickupPartiesId', 'willCallFirstName', 'willCallLastName', 'status', 'discountCodeId'])
  .then((data) => {
    res.status(200).json(data[0])
  })

})

router.post('/users/:id', function(req, res, next){
  knex('users_reservations')
    .insert({orderId:req.body.orderId, userId:req.params.id})
    .returning('*')
  .then((data) => {
    res.status(200).json(data[0])
  })
})


router.patch('/:id', function(req, res, next){
  knex('reservations')
    .where('id', req.params.id)
    .update(req.body)
    .returning(['id', 'orderId', 'pickupPartiesId', 'willCallFirstName', 'willCallLastName', 'status', 'discountCodeId'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//Delete (delete one of the resource)
router.delete('/:id', function(req, res, next){
  knex('reservations')
    .where('id', req.params.id)
    .del('*')
    .returning(['id', 'orderId', 'pickupPartiesId', 'willCallFirstName', 'willCallLastName', 'status', 'discountCodeId'])
  .then((data) => {
    res.status(200).json(data[0])
  })
})

module.exports = router;
