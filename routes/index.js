var express = require('express');
const homeController = require('../controllers/home');
const searchController = require('../controllers/search');

var router = express.Router();

/* GET home page. */
router.get('/', homeController.home);

router.get(`/results`, searchController.search);

module.exports = router;
