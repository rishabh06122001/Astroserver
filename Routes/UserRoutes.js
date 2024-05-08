const express = require('express');
const router = express.Router(); 

router.use(express.json());

const userController = require('../Controller/userController');

const {registerValidator,loginValidation}=require('../helper/validation')

router.post('/register', registerValidator,userController.userRegister);
router.post('/login',loginValidation,userController.loginUser);
router.post('/otp-verification/:id',userController.otpVerification);
router.post('/book-pooja/user-deatils/:id',userController.book_pooja_details);

module.exports = router; 
