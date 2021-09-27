const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const userRoute = require("./src/users/user-routes");
const articleRoute = require("./src/articles/articles-routes");

const uri =
  "mongodb+srv://hobbyistDB:hobbyistDB@cluster0.thtqd.mongodb.net/Hobbyist_DB?retryWrites=true&w=majority";
  // "mongodb://localhost:27017/Hobbyist";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB Connected...");
  });

app.use("/users", userRoute);

app.use("/articles", articleRoute);

app.get("/", (req, res) => res.send("Welcome to Hobbyist Application"));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Hobbyist app listening at http://localhost:${port}`);
});
