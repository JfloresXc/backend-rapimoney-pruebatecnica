const {
  getClients,
  postClient,
} = require("../controllers/client.controller");
const route = require("express").Router();

route.get("/", getClients);
route.post("/", postClient);

module.exports = route;
