const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGO_DB_URI;
const mongodb = mongoose.connect(connectionString)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = mongodb;
