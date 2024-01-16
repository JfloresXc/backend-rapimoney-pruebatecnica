const {
  getClients,
  postClient,
  getClientById,
  putClient,
} = require("../controllers/client.controller");
const route = require("express").Router();

route.get("/", getClients);
route.get("/:id", getClientById);
route.post("/", postClient);
route.put("/:id", putClient);

module.exports = route;
