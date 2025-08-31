const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connection = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Error while connecting the database "));
module.exports = connection;
