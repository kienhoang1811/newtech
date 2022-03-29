const mongoose = require('mongoose')
const validator = require('validator')

const address = new mongoose.Schema(
  {
    // customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
    contact_id: { type: mongoose.Schema.Types.ObjectId, ref: "_contacts"},

    street: { type: String, required: true, lowercase: true },
    ward: { type: String, required: true, lowercase: true },
    district: { type: String, required: true, lowercase: true },
    city: { type: String, required: true, lowercase: true },
  },
  { timestamps: true },
)

exports.addressModel = mongoose.model('_addresses', address)
