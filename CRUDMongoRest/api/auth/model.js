const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
  {
    email: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String
  },
  { timestamps: true }
)

userSchema.plugin(uniqueValidator);

const User = mongoose.model("user", userSchema);

module.exports = User;  