import winston from "winston";

const myFormat = winston.format.printf(
    ({ level, message, timestamp }) => {
      return `${timestamp}  ${level}: ${message}`;
    }
  );
const logger = winston.createLogger({
    format :winston.format.combine(
        winston.format.timestamp(),myFormat),
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'silly' }),
    
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' }),
      ],
      rejectionHandlers: [
        new winston.transports.File({ filename: 'rejections.log' }),
      ],
      exitOnError : false,
});



export default logger;