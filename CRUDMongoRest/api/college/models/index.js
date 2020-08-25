const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const collegeSchema = mongoose.Schema(
  {
    name: String
  },
  { timestamps: true }
)

collegeSchema.plugin(uniqueValidator);

const College = mongoose.model("college", collegeSchema);

module.exports = College;  