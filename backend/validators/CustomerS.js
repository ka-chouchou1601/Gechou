const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('name')
        .notEmpty().withMessage('name is must be there'),
      check('email')
        .isEmail().withMessage('Valid Email is must be there'),
    check('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 8 characters')
];

exports.validateSigninRequest = [
    check('email')
        .isEmail().withMessage('Valid Email is must be there'),
    check('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 8 characters')
];

exports.isRequestValidated = (req, res,next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}