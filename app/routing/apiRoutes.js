"use strict";

const express = require("express");
const friends = require("../data/friends.js");

const app = express();


function findFriend(person) {
  let result = friends[0];
  let smallestDifference = Number.MAX_VALUE;
  
  for (const friend of friends) {
    let totalDifference = 0;

    for (let i = 0; i < friend.scores.length; i++) {
      totalDifference += Math.abs(friend.scores[i] - person.scores[i]);
    }

    if (totalDifference < smallestDifference) {
      smallestDifference = totalDifference;
      result = friends[i];
    }
  }

  return result;
}


app.get("/api/friends", (request, response) => {
  response.send(JSON.stringify(friends));
});

app.post("/api/friends", (request, response) => {
  const friend = findFriend(request.body);
  response.send(friend);
});

module.exports = app;