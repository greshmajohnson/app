const express = require("express");
const router = express.Router();

const User = require("./users.model");

router.post("/create-user", async (req, res, next) => {
  try {
    console.log("Creating User -", req.body);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/authenticate/:email/:password", async (req, res, next) => {
  try {
    console.log("Authenticating-", req.params.email);
    const user = await User.findOne({ email: req.params.email });
    if (user?.password === req.params.password) {
      res.send({ authenticated: true , user: user});
    } else {
      res.send({ authenticated: false });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ authenticated: false });
  }
});

router.get("/get-users", async (req, res, next) => {
  try {
    console.log("Fetching users");
    const result = await User.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
