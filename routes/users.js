'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('users')
    .select('id', 'firstName', 'lastName', 'email', 'isWaiverSigned', 'userType', 'hshPwd', 'preferredLocation')
    .then((data) => {
      res.status(200).json(data)
    })
})

//Read (get one of the resource)
// Get One
router.get('/:id', function (req, res, next) {
  knex('users')
    .select('id', 'firstName', 'lastName', 'email', 'isWaiverSigned', 'userType', 'hshPwd', 'preferredLocation')
    .where('id', req.params.id)
    .then((data) => {
      res.status(200).json(data[0])
    })
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  // use req.body
  knex('users')
    .insert(req.body)
    .returning(['id', 'firstName', 'lastName', 'email', 'isWaiverSigned', 'userType', 'hshPwd', 'preferredLocation'])
    .then((data) => {
      res.status(200).json(data[0])
    })
})

router.patch('/:id', function (req, res, next) {
  knex('users')
    .where('id', req.params.id)
    .update(req.body)
    .returning(['id', 'firstName', 'lastName', 'email', 'isWaiverSigned', 'userType', 'hshPwd', 'preferredLocation'])
    .then((data) => {
      res.status(200).json(data[0])
    })
})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  knex('users')
    .where('id', req.params.id)
    .del('*')
    .returning(['id', 'firstName', 'lastName', 'email', 'isWaiverSigned', 'userType', 'hshPwd', 'preferredLocation'])
    .then((data) => {
      res.status(200).json(data[0])
    })
})
module.exports = router;
