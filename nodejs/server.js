const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./data/connect.js");

const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.PORT || 4000, () =>
  console.log("http://localhost:4000")
);
