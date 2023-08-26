const express = require('express');
const router = express.Router();

const dweetsController = require('../controllers/dweet');
// const dweetsModel = require('../data/model');

router.get('/', dweetsController.getDweets);

router.get('/:id', dweetsController.getDweetsById);

router.post('/', dweetsController.createDweets);

router.put('/:id', dweetsController.updateDweets);

router.delete('/:id', dweetsController.deleteDweets);

module.exports = router;
