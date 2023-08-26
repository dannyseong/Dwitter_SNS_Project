const dweetsModel = require('../data/model');

function getDweets(req, res, next) {
  const username = req.query.username;
  const data = username
    ? dweetsModel.getByUsername(username)
    : dweetsModel.getAll();
  res.status(200).json(data);
  next();
}

function getDweetsById(req, res, next) {
  const id = req.params.id;
  const data = dweetsModel.getById(id);
  res.status(200).json(data);
  next();
}

function createDweets(req, res, next) {
  const { text, username, name, url } = req.body;
  res.status(201).json(dweetsModel.create(text, username, name, url));
  next();
}

function updateDweets(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  res.status(200).json(dweetsModel.update(id, text));
  next();
}

function deleteDweets(req, res, next) {
  const id = req.params.id;
  dweetsModel.remove(id);
  res.sendStatus(204);
  next();
}

module.exports = {
  getDweets,
  getDweetsById,
  createDweets,
  updateDweets,
  deleteDweets,
};
