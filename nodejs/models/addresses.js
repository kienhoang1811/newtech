const mongoose = require('mongoose')
const validator = require('validator')

const address = new mongoose.Schema(
  {
    
    street: { type: String, required: true, lowercase: true },
    ward: { type: String, required: true, lowercase: true },
    district: { type: String, required: true, lowercase: true },
    city: { type: String, required: true, lowercase: true },
    country: { type: String, required: true, lowercase: true },
    
    // customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
    contact_id: { type: mongoose.Schema.Types.ObjectId, ref: '_contacts' },
  },
  { timestamps: true },
)

exports.addressModel = mongoose.model('_addresses', address)
