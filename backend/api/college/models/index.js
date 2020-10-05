const { Double } = require('mongodb');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const collegeSchema = mongoose.Schema(
  {
    name: String,
    courses: Array,
    city: String,
    state: String,
    rating: Number
  },
  { timestamps: true }
)

collegeSchema.plugin(uniqueValidator);

const College = mongoose.model("college", collegeSchema);

module.exports = College;  