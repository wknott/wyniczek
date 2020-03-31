const express = require('express')
const router = express.Router()
const User = require('../models/user')
router.get('/', (req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router