const express = require("express");
const dotenv = require("dotenv");
const connection = require("./config/db");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080



app.listen(PORT , console.log(`server is running at http://localhost:${PORT}`));