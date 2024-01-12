const { Sequelize } = require("sequelize");

let NAME_FILE = "system.sqlite";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: NAME_FILE,
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

module.exports = { sequelize };
