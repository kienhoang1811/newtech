const mongoose = require("mongoose");
const validator = require("validator");

const account = new mongoose.Schema(
  {
    person_id: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
    username: { type: String, unique: true, required: true, lowercase: true },
    password: {type: String, required: true },
  },
  { timestamps: true }
);

exports.accountModel = mongoose.model("account", account);
