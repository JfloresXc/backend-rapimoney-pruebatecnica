const { configError } = require("../utils/catchHandler");
const MODULE = "LogControlS";
const { setConfigError } = configError({ module: MODULE });
const { LogControl } = require("../models/LogControl.model");

const controller = {};

controller.getLogControls = async (req, res, next) => {
  try {
    const options = {
      order: [["id", "DESC"]],
      attributes: [
        "id",
        "message",
        "name",
        "statusCode",
        "createdAt",
        "module",
        "action",
        "stack",
      ],
    };

    const logs = await LogControl.findAll({ ...options });
    res.status(200).json(logs);
  } catch (error) {
    setConfigError(error, { action: "GET - All logs" }, next);
  }
};
module.exports = controller;
