const mongoose = require("mongoose");
const validator = require("validator");

const person = new mongoose.Schema(
  {
    id: {type: Int32Array, required: true},
    name: { type: String, required: true, lowercase: true },
    
  },
  { timestamps: true }
);

exports.personModel = mongoose.model("person", person);