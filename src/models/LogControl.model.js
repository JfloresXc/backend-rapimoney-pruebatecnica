const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const LogControl = sequelize.define("LogControl", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: DataTypes.STRING,
  name: DataTypes.STRING,
  statusCode: DataTypes.STRING,
  stack: DataTypes.STRING,
  module: DataTypes.STRING,
  action: DataTypes.STRING,
});

module.exports = { LogControl };
