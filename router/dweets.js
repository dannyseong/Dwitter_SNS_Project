const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let dweets = [
  {
    id: '1', // tweet id
    text: 'First Message', // tweet text
    createdAt: Date.now().toString(), // create date
    name: 'danny', // user name
    username: 'danny', // user id
    url: 'https://avatars.githubusercontent.com/u/99000722?v=4', // User profile image
  },
  {
    id: '2', // tweet id
    text: 'Second Message', // tweet text
    createdAt: Date.now().toString(), // create date
    name: 'nari', // user name
    username: 'nari', // user id
    url: 'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg', // User profile image
  },
];

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? dweets.filter((d) => d.username === username)
    : dweets;
  res.status(200).json(data);
  next();
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = dweets.find((t) => t.id === id);
  res.status(200).json(data);
  next();
});

router.post('/', (req, res, next) => {
  const { text, username, name, url } = req.body;
  const dweet = {
    id: uuidv4(),
    text,
    username,
    name,
    url,
  };
  dweets = [dweet, ...dweets];
  res.status(201).json(dweet);
  next();
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  data = dweets.find((d) => d.id === id);
  data.text = text;
  res.status(200).json(data);
  next();
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  dweets = dweets.filter((d) => d.id !== id);
  res.sendStatus(204);
  next();
});

router.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error has occured' });
});

module.exports = router;
