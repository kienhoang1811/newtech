const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/newtech",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connect.js : pass connect db")
);