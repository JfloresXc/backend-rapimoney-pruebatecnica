module.exports = class ErrorLocal extends Error {
  constructor({
    message = "WITHOUT MESSAGE",
    name = "PersonalError",
    statusCode,
    isSavedLog,
  }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.isSavedLog = isSavedLog;
    Error.captureStackTrace(this, this.constructor);
  }
};
