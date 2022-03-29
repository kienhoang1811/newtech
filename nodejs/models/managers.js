const mongoose = require('mongoose')
const validator = require('validator')

const manager = new mongoose.Schema(
  {
    // person_id: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
    contact_id: { type: mongoose.Schema.Types.ObjectId, ref: "_contacts" },

    username: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, unique: true, required: true, lowercase: true },
  },
  { timestamps: true },
)

exports.managerModel = mongoose.model('_managers', manager)
