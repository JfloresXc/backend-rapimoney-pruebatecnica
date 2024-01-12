const express = require("express");
const { errorHandler } = require("../utils/errorHandler");
const path = require("path");
const cors = require("cors");

const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3002);

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/api/client", require("../routes/client.route"));
app.use("/api/log", require("../routes/log.route"));
app.use("/api/user", require("../routes/user.routes"));

// STATIC FILES
app.use("/", express.static(path.join(__dirname, "../build")));
app.use((request, response) => {
  response.sendFile(path.join(__dirname, "../build/index.html"));
});

// ERRORS
app.use((error, request, response, next) => {
  errorHandler(error, response);
});

module.exports = { app };
