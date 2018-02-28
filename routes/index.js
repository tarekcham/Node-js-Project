const express = require('express');
const router = express.Router();
const stroedControllers = require('../controllers/storeController');
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', stroedControllers.homePage);
router.get('/add', stroedControllers.addStore);
router.post('/add', catchErrors(stroedControllers.createStore));


module.exports = router;
