'use strict';

const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

router.get('/', function (req, res, next) {
  const user = {
    id: 1,
    userName: 'guest'
  }
  jwt.sign({user: user}, 'secretjwtkey', { expiresIn: '24s' }, (err, token)=>{
    res.json({
      token: token
    })
  })
})




module.exports = router;
