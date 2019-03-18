const express = require('express');
const controlController = require('../controllers/control')
const router = express.Router();


/* GET users listing. */
router.get('/', controlController.control);

module.exports = router;
