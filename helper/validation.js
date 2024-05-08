const {check} = require('express-validator');
exports.registerValidator=[
    check('name','Name is required').not().isEmpty(),
    check('mobile','Mobile no. should be contain 10 digits').isLength({
        min:10,
        max:10
    }),
];

exports.loginValidation=[
    check('mobile','Mobile no. should be contain 10 digits').isLength({
        min:10,
        max:10
    }),
];