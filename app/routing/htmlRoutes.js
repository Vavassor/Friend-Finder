"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.get("/survey", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public/survey.html"));
});

module.exports = app;