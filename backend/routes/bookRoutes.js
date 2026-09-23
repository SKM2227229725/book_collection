const express = require("express");
const Book = require("../models/book");

const router = express.Router();

router.post("/", async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.put("/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(book);
});

router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;