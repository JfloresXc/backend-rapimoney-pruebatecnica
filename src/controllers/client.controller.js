const { configError } = require("../utils/catchHandler");
const MODULE = "CLIENT";
const { setConfigError } = configError({ module: MODULE });
const { isSomeEmptyFromModel } = require("../utils/validations");
const { Client } = require("../models/Client.model");

const controller = {};

controller.getClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    setConfigError(error, { action: "GET - Clients" }, next);
  }
};

controller.postClient = async (req, res, next) => {
  try {
    const body = req.body;
    const {
      dni,
      names,
      surnames,
      birthday,
      phonenumber,
      email,
      bank,
      bankaccount,
    } = body;

    if (isSomeEmptyFromModel([dni, names, surnames, birthday]))
      return;

    const response = await Client.create({
      dni,
      names,
      surnames,
      birthday,
      phonenumber,
      email,
      bank,
      bankaccount,
    });

    res.status(200).json(response);
  } catch (error) {
    setConfigError(
      error,
      { action: "POST - Create a new client" },
      next
    );
  }
};

module.exports = controller;
