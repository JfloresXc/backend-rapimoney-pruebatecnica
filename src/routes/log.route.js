const {
  getLogControls,
} = require("../controllers/logcontrol.controller");
const route = require("express").Router();

route.get("/", getLogControls);

module.exports = route;
