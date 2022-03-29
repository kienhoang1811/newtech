const express = require("express");
const { get } = require("../controllers/index/get");
const { post } = require("../controllers/index/post");
const { put } = require("../controllers/index/put");
const { patch } = require("../controllers/index/patch");
const { Delete } = require("../controllers/index/delete");

const route = express.Router();

route.get("/", get);

route.post("/", post);

route.put("/", put);

route.patch("/", patch);

route.delete("/", Delete);

module.exports = route;
