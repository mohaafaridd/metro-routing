const express = require('express');
const adminController = require('../controllers/admin')
const router = express.Router();

router.get('/', adminController.index);

router.get('/lines/add', adminController.add);

router.get('/lines/edit', adminController.edit);

router.post('/lines/add', adminController.postLine);

module.exports = router;
