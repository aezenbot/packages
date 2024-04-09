import Logger from "@aezen/logger";

const logger = new Logger({
  timestamp: true,
  prefix: "TYPESCRIPT"
})

logger.log("This is a log message.")
logger.warn("This is a warning message.")
logger.debug("This is a debug message.")
logger.info("This is an info message.")
logger.success("This is a success message.")
logger.fatal("This is a fatal message.")

logger.error("This is a string error message.")
logger.error(new Error("This is an regular error message."))
logger.error(new TypeError("This is a type error message."))
             logger.error(new RangeError("This is a range error message."))