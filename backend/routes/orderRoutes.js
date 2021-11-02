const express = require('express');
const { addItem } = require('../controller/orderControllers');
const router = express.Router();
const { Signin  } = require('../controller/customerControllers');

router.post('/Customer/order/add', Signin, addItem);


module.exports = router;