"use strict";

const express = require("express");
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

const PORT = process.env.PORT || 8080;
let app;

app = express();

app.use(express.static("app/public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});