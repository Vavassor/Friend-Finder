"use strict";

const express = require("express");
const friends = require("../data/friends.js");

const app = express();

app.get("/api/friends", (request, response) => {
  response.send(JSON.stringify(friends));
});

app.post("/api/friends", (request, response) => {
  response.send("A new friend is here.");
});

module.exports = app;