import Logger from "@aezen/logger";

const logger = new Logger({
  timestamp: true,
  prefix: "TYPESCRIPT"
})

logger.log("This is a log message.")
logger.warn("This is a warning message.")
logger.error("This is an error message.")
logger.debug("This is a debug message.")
logger.info("This is an info message.")
logger.success("This is a success message.")
logger.fatal("This is a fatal message.")