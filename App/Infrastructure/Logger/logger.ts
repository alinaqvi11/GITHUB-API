import winston from "winston";

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});
const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "./App/Infrastructure/Logger/Message.log", level: "info" }),
    new winston.transports.File({ filename: "./App/Infrastructure/Logger/Error.log", level: "error" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "./App/Infrastructure/Logger/Exceptions.log" }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "./App/Infrastructure/Logger/Rejections.log" }),
  ],
  exitOnError: false,
});

export default logger;
