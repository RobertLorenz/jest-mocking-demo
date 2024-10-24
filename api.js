const fetchUserData = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json());
  };
  
  module.exports = {
    fetchUserData,
  };