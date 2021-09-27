const express = require("express");
const router = express.Router();

const Article = require("./articles.model");

router.post("/create-aritcle", async (req, res, next) => {
  try {
    console.log("Create Article - ", req.body);
    const article = new Article({
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      status: "Pending Approval",
      owner: req.body.owner,
    });
    const result = await article.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.patch("/update-article", async (req, res, next) => {
  try {
    console.log("Update Article - ", req.query.id);
    const result = await Article.findByIdAndUpdate(req.query.id, {
      status: req.query.status,
    });
    res.send({message: "Status Updated"});
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/get-articles", async (req, res, next) => {
  try {
    console.log("Fetching articles");
    const result = await Article.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/get-my-articles", async (req, res, next) => {
  try {
    console.log("Fetching articles");
    const result = await Article.find({ owner: req.query.owner });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/delete-article", async (req, res, next) => {
  try {
    console.log("Deleting article");
    const result = await Article.findByIdAndDelete(req.query.id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
