const { configError } = require("../utils/catchHandler");
const MODULE = "CLIENT";
const { setConfigError } = configError({ module: MODULE });
const { isSomeEmptyFromModel } = require("../utils/validations");
const { Client } = require("../models/Client.model");

const controller = {};

controller.getClients = async (req, res, next) => {
  try {
    const { page = 1, perPage = 2 } = req.query;

    const options = {
      limit: perPage,
      offset: perPage * (page - 1),
      order: [["id", "DESC"]],
    };

    const clients = await Client.findAll(options);
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
    setConfigError(error, { action: "GET - Clients" }, next);
  }
};

controller.getClientById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const client = await Client.findOne({ where: { id } });
    res.status(200).json(client ?? {});
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

controller.putClient = async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;
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

    const response = await Client.update(
      {
        dni,
        names,
        surnames,
        birthday,
        phonenumber,
        email,
        bank,
        bankaccount,
      },
      { where: { id } }
    );

    res.status(200).json(response);
  } catch (error) {
    setConfigError(error, { action: "PUT - Update client" }, next);
  }
};

module.exports = controller;
