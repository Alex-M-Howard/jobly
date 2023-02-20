"use strict";

const app = require("./app");

app.listen($PORT, function () {
  console.log(`Started on http://localhost:${$PORT}`);
});
