const express = require('express');
const router = express.Router();
const { signup, requireSignin } = require('../controller/customerControllers');
const { signin } = require('../controller/customerControllers');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../validators/CustomerS');



router.post('/signin',validateSigninRequest, isRequestValidated, signin);
router.post('/signup', validateSignupRequest, isRequestValidated, signup);

//router.post('/profile',requireSignin, (req,res)=> {
  //res.status(200).json({user:'profile'})
//})

module.exports = router;