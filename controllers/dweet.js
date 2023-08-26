const dweetsModel = require('../data/model');

async function getDweets(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? dweetsModel.getByUsername(username)
    : dweetsModel.getAll());
  res.status(200).json(data);
  next();
}

async function getDweetsById(req, res, next) {
  const id = req.params.id;
  const data = await dweetsModel.getById(id);
  res.status(200).json(data);
  next();
}

async function createDweets(req, res, next) {
  const { text, username, name, url } = req.body;
  res.status(201).json(await dweetsModel.create(text, username, name, url));
  next();
}

async function updateDweets(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  res.status(200).json(await dweetsModel.update(id, text));
  next();
}

async function deleteDweets(req, res, next) {
  const id = req.params.id;
  await dweetsModel.remove(id);
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
