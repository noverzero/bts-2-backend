'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function(req, res, next){
  knex('users')
    .select('*')
  .then((data) => {
    res.status(200).json(data)
  })
})

//Read (get one of the resource)
// Get One
router.get('/:id', function(req, res, next){
  knex('users')
    .select('*')
    .where('id', req.params.id)
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//Create (create one of the resource)
router.post('/', function(req, res, next){
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    res.status(404).send('Please include first name, last name, and email!')
    return null
  }
  knex('users')
    .select('*')
    .where({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(userExists => {
      if(!userExists[0]){
      knex('users')
        .insert({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    isWaiverSigned: false,
                    userType: 'standard',
                    preferredLocation: "",
                })
      .returning('*')
      .then((data) => {
        res.status(200).json(data[0])
      })
    } else {
      console.log('logged in via FaceBOOOOK')
      res.status(200).send('Logged in.')
    }
    }
    )

})

router.patch('/:id', function(req, res, next){
  knex('users')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
  .then((data) => {
    res.status(200).json(data[0])
  })
})

//Delete (delete one of the resource)
router.delete('/:id', function(req, res, next){
  knex('users')
    .where('id', req.params.id)
    .del('*')
    .returning('*')
  .then((data) => {
    res.status(200).json(data[0])
  })
})

module.exports = router;
