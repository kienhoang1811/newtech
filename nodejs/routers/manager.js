const express = require("express");
// const { get } = require("../controllers/manager/get");
const { post } = require("../controllers/manager/post");
// const { put } = require("../controllers/manager/put");
// const { patch } = require("../controllers/manager/patch");
// const { Delete } = require("../controllers/manager/delete");

const route = express.Router();

// route.get("/", get);

route.post("/", post);

// route.put("/", put);

// route.patch("/:id", patch);

// route.delete("/:id", Delete);

module.exports = route;
