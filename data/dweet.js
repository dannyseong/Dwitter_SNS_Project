const { v4: uuidv4 } = require('uuid');
const userRepository = require('./auth');

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
      const { username, name, url } = await userRepository.findById(
        dweet.userId
      );

      return { ...dweet, username, name, url };
    })
  );
}

async function getByUsername(username) {
  // return dweets.filter((d) => d.username === username);
  return getAll().then((dweets) =>
    dweets.filter((dweet) => dweet.username === username)
  );
}

async function getById(id) {
  // return dweets.find((t) => t.id === id);
  const found = dweets.find((dweet) => dweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

async function create(text, userId) {
  const dweet = {
    id: uuidv4(),
    text,
    createdAt: new Date(),
    userId,
  };
  dweets = [dweet, ...dweets];
  return getById(dweet.id);
  // const dweet = {
  //   id: uuidv4(),
  //   text,
  //   username,
  //   name,
  //   url,
  // };
  // dweets = [dweet, ...dweets];
  // return dweet;
}

async function update(id, text) {
  const dweet = dweets.find((dweet) => dweet.id === id);
  if (dweet) {
    dweet.text = text;
  }
  return getById(dweet.id);
  // const dweet = dweets.find((d) => d.id === id);
  // dweet.text = text;
  // return dweet;
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
