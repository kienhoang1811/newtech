const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/newtech",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("http://localhost:2701723/newtech")
);
