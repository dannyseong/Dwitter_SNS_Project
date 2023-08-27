const express = require('express');
const { body } = require('express-validator');

const dweetsController = require('../controllers/dweet');
const { validate } = require('../middleware/validator.js');
const { isAuth } = require('../middleware/auth');

const router = express.Router();

// validation
// sanitisation

const validateDweet = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text should be at least three chracters.'),
  validate,
];

// GET /dweets
// GET /dweets?username=:username
router.get('/', isAuth, dweetsController.getDweets);

// GET /dweets/:id
router.get('/:id', isAuth, dweetsController.getDweetsById);

// POST /dweets
router.post('/', isAuth, validateDweet, dweetsController.createDweets);

// PUT /dweets/:id
router.put('/:id', isAuth, validateDweet, dweetsController.updateDweets);

// DELETE /dweets/:id
router.delete('/:id', isAuth, dweetsController.deleteDweets);

module.exports = router;
