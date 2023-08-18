const { v4: uuidv4 } = require('uuid');

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

function getAll() {
  return dweets;
}

function getByUsername(username) {
  return dweets.filter((d) => d.username === username);
}

function getById(id) {
  return dweets.find((t) => t.id === id);
}

function create(text, username, name, url) {
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

function update(id, text) {
  const dweet = dweets.find((d) => d.id === id);
  dweet.text = text;
  return dweet;
}

function remove(id) {
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
