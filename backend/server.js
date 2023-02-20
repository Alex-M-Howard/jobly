"use strict";

const app = require("./app");
const { PORT, HOST } = require("./config");

app.listen(PORT, HOST, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
