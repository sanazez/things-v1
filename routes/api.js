const express = require('express');
const v1api = require('./v1api');

const router = express.Router();

router.use('/v1', v1api);

module.exports = router;
