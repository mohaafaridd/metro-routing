const express = require('express');
const controlController = require('../controllers/control')
const router = express.Router();

router.get('/lines', controlController.control);

module.exports = router;
