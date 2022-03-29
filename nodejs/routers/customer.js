const express = require("express");
const { get } = require("../controllers/customer/get");
const { post } = require("../controllers/customer/post");
const { put } = require("../controllers/customer/put");
const { patch } = require("../controllers/customer/patch");
const { Delete } = require("../controllers/customer/delete");

const route = express.Router();

route.get("/", get);

route.post("/", post);

// route.put("/", put);

// route.patch("/", patch);

// route.delete("/", Delete);

module.exports = route;
