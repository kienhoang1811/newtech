const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//     res.json({ message: "hello world" });
// });

app.use("/", require("./routers/index"));
// app.use("/account", require("./routers/account"));
// app.use("/user", require("./routers/user"));
// app.use("/auto", require("./routers/auto"));

// app.use("test1/account", require("./routers/account"));
// app.use("test1/user", require("./routers/user"));
// app.use("test1/auto", require("./routers/auto"));


module.exports = app;