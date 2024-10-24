// src/userService.js
const { fetchUserData } = require('./api');

const getUserFullName = async (userId) => {
  const user = await fetchUserData(userId);
  return `${user.name.first} ${user.name.last}`;
};

const getAllUsers = async () => {
  const users = await Promise.all([fetchUserData(1), fetchUserData(2)]);
  return users.map((user) => `${user.name.first} ${user.name.last}`);
};

module.exports = {
  getUserFullName,
  getAllUsers,
};
