const winston = require('winston')
const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console({ handleExceptions: true })
    ]
  });
  
  throw new Error('Hello, winston!');