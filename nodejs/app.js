const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routers/index"));
app.use("/system/login", require("./routers/login"));
app.use("/customer", require("./routers/customer"));
app.use("/manager", require("./routers/manager"));

module.exports = app;
