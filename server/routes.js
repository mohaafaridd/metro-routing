const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { lines } = require('./middleware');

router.get('/direction', lines, controller.getDirection);

module.exports = router;
