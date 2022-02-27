const mongoose = require("mongoose");
const validator = require("validator");

const address = new mongoose.Schema(
  {
    person_id: { type: mongoose.Schema.Types.ObjectId, ref: "person"},
    address: { type: String, required: true, lowercase: true},
    city:{type: String, required: true, lowercase: true}
  },
  { timestamps: true }
);

exports.addressModel = mongoose.model("address", address);