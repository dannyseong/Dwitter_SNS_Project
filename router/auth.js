const express = require('express');
const { body } = require('express-validator');
const { validate } = require('../middleware/validator.js');

const authControllers = require('../controllers/auth');
const { isAuth } = require('../middleware/auth.js');

const router = express.Router();

const validateCrendential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be at least 5 characters'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('password should be at least 5 characters'),
  validate,
];

const validateSignup = [
  ...validateCrendential,
  body('name').notEmpty().withMessage('name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
  body('url')
    .isURL()
    .withMessage('invalid URL')
    .optional({ nullable: true, checkFalsy: true }),
];

router.post('/signup', validateSignup, authControllers.signup);

router.post('/login', validateCrendential, authControllers.login);

router.get('/me', isAuth, authControllers.me);

module.exports = router;
