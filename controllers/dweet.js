const dweetRepository = require('../data/dweet');

async function getDweets(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? dweetRepository.getByUsername(username)
    : dweetRepository.getAll());
  return res.status(200).json(data);
  next();
}

async function getDweetsById(req, res, next) {
  const id = req.params.id;
  const data = await dweetRepository.getById(id);
  return res.status(200).json(data);
  next();
}

async function createDweets(req, res, next) {
  const { text } = req.body;
  return res.status(201).json(await dweetRepository.create(text, req.userId));
  next();
}

async function updateDweets(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const dweet = await dweetRepository.getById(id);
  if (!dweet) {
    return res.sendStatus(404);
  }
  if (dweet.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await dweetRepository.update(id, text);
  return res.status(200).json(updated);
}

async function deleteDweets(req, res, next) {
  const id = req.params.id;
  const dweet = await dweetRepository.getById(id);
  if (!dweet) {
    return res.sendStatus(404);
  }
  if (dweet.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await dweetRepository.remove(id);
  return res.sendStatus(204);
  next();
}

module.exports = {
  getDweets,
  getDweetsById,
  createDweets,
  updateDweets,
  deleteDweets,
};
