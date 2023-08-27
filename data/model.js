const { v4: uuidv4 } = require('uuid');
const userRepository = require('../data/auth');

let dweets = [
  {
    id: '1', // tweet id
    text: 'First Message', // tweet text
    createdAt: Date.now().toString(), // create date
    userId: '1',
  },
  {
    id: '2', // tweet id
    text: 'Second Message', // tweet text
    createdAt: Date.now().toString(), // create date
    userId: '1',
  },
];

async function getAll() {
  return Promise.all(
    dweets.map(async (dweet) => {
      const { username, name, url } = await userRepository.findById(dweet.id);
      return { ...dweet, username, name, url };
    })
  );
}

async function getByUsername(username) {
  return dweets.filter((d) => d.username === username);
}

async function getById(id) {
  return dweets.find((t) => t.id === id);
}

async function create(text, username, name, url) {
  const dweet = {
    id: uuidv4(),
    text,
    username,
    name,
    url,
  };
  dweets = [dweet, ...dweets];
  return dweet;
}

async function update(id, text) {
  const dweet = dweets.find((d) => d.id === id);
  dweet.text = text;
  return dweet;
}

async function remove(id) {
  dweets = dweets.filter((d) => d.id !== id);
}

module.exports = {
  getAll,
  getByUsername,
  getById,
  create,
  update,
  remove,
};
