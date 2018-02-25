const express = require('express');
const router = express.Router();
const stroedControllers = require('../controllers/storeController');

// Do work here
router.get('/', stroedControllers.homePage);

module.exports = router;
