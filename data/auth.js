const { v4: uuidv4 } = require('uuid');

let users = [
  {
    id: '1',
    username: 'sdh742',
    password: '$2b$12$0MXl1UYhAPkHeBonhHJxLeSg/aPYjrWl8a80bwU/wsfFgixu7.LYq', // abc123
    name: 'danny',
    email: 'gibeks@hanmail.net',
    url: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
  },
];

async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

async function createUser(user) {
  const created = { ...user, id: uuidv4() };
  users.push(created);
  return created.id;
}

async function findById(id) {
  return users.find((user) => user.id === id);
}

module.exports = { findByUsername, createUser, findById };
