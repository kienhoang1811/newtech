const express = require("express");
// const { get } = require("../controllers/system/login/get");
const { post } = require("../controllers/system/login/post");
// const { put } = require("../controllers/system/login/put");
// const { patch } = require("../controllers/system/login/patch");
// const { Delete } = require("../controllers/system/login/delete");

const route = express.Router();

// route.get("/", get);

route.post("/", post);

// route.put("/", put);

// route.patch("/", patch);

// route.delete("/", Delete);

module.exports = route;
