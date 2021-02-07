const express = require('express');
const thingAPi = require('./thing');

const router = express.Router();

router.use('/things', thingAPi);
module.exports = router;
