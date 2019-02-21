"use strict";

const express = require("express");
const fs = require("fs");

const app = express();


function findFriend(person, friends) {
  let result = friends[0];
  let smallestDifference = Number.MAX_VALUE;
  
  for (const friend of friends) {
    let totalDifference = 0;

    for (let i = 0; i < friend.scores.length; i++) {
      totalDifference += Math.abs(friend.scores[i] - person.scores[i]);
    }

    if (totalDifference < smallestDifference) {
      smallestDifference = totalDifference;
      result = friend;
    }
  }

  return result;
}


app.get("/api/friends", (request, response) => {
  fs.readFile("app/data/friends.json", "utf8", (error, data) => {
    if (error) {
      throw error;
    }

    response.send(data);
  });
});

app.post("/api/friends", (request, response) => {
  fs.readFile("app/data/friends.json", "utf8", (error, data) => {
    if (error) {
      throw error;
    }

    const friends = JSON.parse(data);
    const person = request.body;
    const friend = findFriend(person, friends);
    friends.push(person);

    fs.writeFile("app/data/friends.json", JSON.stringify(friends, null, 2), (error) => {
      if (error) {
        throw error;
      }

      response.send(JSON.stringify(friend));
    });
  });
});

module.exports = app;