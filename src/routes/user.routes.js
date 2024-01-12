const {
  getUsers,
  signup,
  login,
} = require("../controllers/user.controller");
const route = require("express").Router();

route.get("/", getUsers);
route.post("/signup", signup);
route.post("/login", login);

module.exports = route;
