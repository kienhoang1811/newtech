const mongoose = require('mongoose')
const validator = require('validator')

const customer = new mongoose.Schema(
  {
    // person_id: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
    id: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },

    address_id: { type: mongoose.Schema.Types.ObjectId, ref: "_addresses"},
    contact_id: { type: mongoose.Schema.Types.ObjectId, ref: "_contacts"},

  },
  { timestamps: true },
)

exports.customerModel = mongoose.model('_customers', customer)
