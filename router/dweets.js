const express = require('express');
const router = express.Router();

const dweetsModel = require('../data/model');

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? dweetsModel.getByUsername(username)
    : dweetsModel.getAll();
  res.status(200).json(data);
  next();
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = dweetsModel.getById(id);
  res.status(200).json(data);
  next();
});

router.post('/', (req, res, next) => {
  const { text, username, name, url } = req.body;
  res.status(201).json(dweetsModel.create(text, username, name, url));
  next();
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  res.status(200).json(dweetsModel.update(id, text));
  next();
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  dweetsModel.remove(id);
  res.sendStatus(204);
  next();
});

router.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error has occured' });
});

module.exports = router;
