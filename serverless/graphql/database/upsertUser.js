'use strict';
const getUser = require('./getUser');

const upsertUser = (id, fbName) => {
  return fetch(`http://localhost:3000/users/${id}`)
      .then((response) => {
        if (response.status >= 400) {
          return fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id,
              fbName,
              cards: [],
            })
          })
              .then((response) => {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
              })
        }
        else {
          return response.json();
        }
      })
};

module.exports = upsertUser;