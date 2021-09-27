const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  image: String,
  title: String,
  description: String,
  status: String,
  owner: String,
});

const article = mongoose.model("article", articleSchema);
module.exports = article;
