const mongoose = require("mongoose");

require("dotenv").config();

const db = process.env.MongoURI;

module.exports = () => {
  return mongoose.connect(db);
};
