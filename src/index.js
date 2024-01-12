const { app } = require("./config/server");
const dotenv = require("dotenv");
dotenv.config();
// LISTEN
app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`);
});
