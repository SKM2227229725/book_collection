const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  year: Number
});

module.exports = mongoose.model("Book", bookSchema);