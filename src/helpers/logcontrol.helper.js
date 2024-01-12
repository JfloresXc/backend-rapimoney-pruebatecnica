const helper = {};

helper.addLog = async (log) => {
  const { message, name, statusCode, stack, module, action } = log;
  const { LogControl } = require("../models/LogControl.model");
  await LogControl.create({
    message,
    name,
    statusCode,
    stack,
    module,
    action,
  });
};

module.exports = helper;
