const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const { User } = require("./User.model");

const Client = sequelize.define("Client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dni: DataTypes.STRING,
  names: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  surnames: DataTypes.STRING,
  birthday: DataTypes.DATE,
  phonenumber: DataTypes.STRING,
  email: DataTypes.STRING,
  bank: DataTypes.STRING,
  bankaccount: DataTypes.STRING,
  idUser: DataTypes.INTEGER,
});

Client.belongsTo(User, { foreignKey: "user_id" });
User.hasOne(Client, { foreignKey: "user_id" });

module.exports = { Client };
