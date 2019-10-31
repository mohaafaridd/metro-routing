const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/direction', controller.getDirection);

module.exports = router;
