const mongoose = require('mongoose')
const validator = require('validator')

const manager = new mongoose.Schema(
  {
    // person_id: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
    id: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, unique: true, required: true, lowercase: true },

    contact_id: { type: mongoose.Schema.Types.ObjectId, ref: "_contacts" },

  },
  { timestamps: true },
)

exports.managerModel = mongoose.model('_managers', manager)
