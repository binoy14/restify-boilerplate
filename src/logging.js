import fs from "fs";
import path from "path";
import config from "../config";
import bunyan from "bunyan";

const createLogger = (config) => {
  let pkg = require(path.join(__dirname, "../package"));
  let appName = pkg.name;
  let appVersion = pkg.version;
  let logDir = config.dir || path.join(__dirname, "logs");
  let logFile = path.join(logDir, appName + "-log.json");
  let logErrorFile = path.join(logDir, appName + "-errors.json");
  let logLevel = config.level || "debug";

  // Create log directory if it doesn't exist
  if(!fs.existsSync(logDir)) fs.mkdirSync(logDir);

  let log = bunyan.createLogger({
    name: appName,
    streams: [{
      stream: process.stdout,
      level: 'warn'
    },{
      path: logFile,
      level: logLevel,
      type: "rotating-file",
      period: "1d"
    },{
      path: logErrorFile,
      level: "error"
    }],
    serializers: bunyan.stdSerializers
  });

  log.info(`Starting ${appName} , version ${appVersion}`);
  log.info(`Environment set to ${process.env.NODE_ENV}`);
  log.debug("Logging setup completed.");

  return log;
}

export default createLogger;
