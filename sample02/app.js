const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://effysogood:effysode2024@cluster0.csn2e1q.mongodb.net/test"
  )
  .then(() => console.log("Connected Mongoose!"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
