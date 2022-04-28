const express = require('express');
const res = require('express/lib/response');
const Variety = require('../db/models/variety-model');

// const Varieties = require('')

const router2 = express.Router();

router2.get('/', (req, res) => {
    Variety.find({}).then(items => {
      res.json(items)
    })
  });

module.exports = router2;