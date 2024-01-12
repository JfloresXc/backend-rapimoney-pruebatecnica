const { configError } = require("../utils/catchHandler");
const MODULE = "USER";
const { setConfigError } = configError({ module: MODULE });
const { isSomeEmptyFromModel } = require("../utils/validations");
const { User } = require("../models/User.model");
const ErrorLocal = require("../utils/Error");

const controller = {};

controller.getUsers = async (req, res, next) => {
  try {
    const Users = await User.findAll();
    res.status(200).json(Users);
  } catch (error) {
    setConfigError(error, { action: "GET - Users" }, next);
  }
};

controller.signup = async (req, res, next) => {
  try {
    const body = req.body;
    const { username, password } = body;

    if (isSomeEmptyFromModel([username, password])) return;

    const user = await User.findOne({ where: { username } });
    console.log(user);
    if (user)
      throw new ErrorLocal({
        message: "User already created",
        statusCode: 403,
        isSavedLog: true,
      });

    const response = await User.create({
      username,
      password,
    });

    res.status(200).json(response);
  } catch (error) {
    setConfigError(
      error,
      { action: "POST - Create a new User" },
      next
    );
  }
};

controller.login = async (req, res, next) => {
  try {
    const body = req.body;
    const { username, password } = body;

    if (isSomeEmptyFromModel([username, password])) return;

    const user = await User.findOne({
      where: { username, password },
    });

    if (!user)
      throw new ErrorLocal({
        message: "User not found",
        statusCode: 405,
        isSavedLog: false,
      });

    const response = await User.create({
      username,
      password,
    });

    res.status(200).json(response);
  } catch (error) {
    setConfigError(error, { action: "POST - Signin User" }, next);
  }
};

module.exports = controller;
