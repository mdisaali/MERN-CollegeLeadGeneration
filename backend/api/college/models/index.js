const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const collegeSchema = mongoose.Schema(
  {
    buffer: [Buffer]
  }
  )

collegeSchema.plugin(uniqueValidator);

const College = mongoose.model("college", collegeSchema);

module.exports = College;  