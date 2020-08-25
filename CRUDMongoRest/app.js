const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");

const authRoutes = require("./api/auth/routes");
const collegeRoutes = require('./api/college/routes')

const db = require("./config/db.config");
mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use('/auth', authRoutes)

app.use('/colleges', collegeRoutes)

// set port, listen for requests
app.listen(5555, () => {
  console.log(`Server is running on port 5555.`);
});