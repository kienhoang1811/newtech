const mongoose = require("mongoose");
const validator = require("validator");

const contact = new mongoose.Schema(
  {
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "customer"},
    phone: { type: String, required: true},
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    
  },
  { timestamps: true }
);

exports.contactModel = mongoose.model("_contacts", contact);