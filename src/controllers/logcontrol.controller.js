const { configError } = require("../utils/catchHandler");
const MODULE = "LogControlS";
const { setConfigError } = configError({ module: MODULE });
const { LogControl } = require("../models/LogControl.model");

const controller = {};

controller.getLogControls = async (req, res, next) => {
  try {
    const logs = await LogControl.findAll();
    res.status(200).json(logs);
  } catch (error) {
    setConfigError(error, { action: "GET - All logs" }, next);
  }
};
module.exports = controller;
