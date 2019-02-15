"use strict";

const express = require("express");

const app = express();

app.get("/api/friends", (request, response) => {
  response.send("There's no friends yet.");
});

app.post("/api/friends", (request, response) => {
  response.send("A new friend is here.");
});

module.exports = app;