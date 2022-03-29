const mongoose = require("mongoose");
const validator = require("validator");

const customer = new mongoose.Schema(
  {
    id: {type: Int32Array, required: true},
    name: { type: String, required: true, lowercase: true },
    
  },
  { timestamps: true }
);

exports.customerModel = mongoose.model("_customers", customer);