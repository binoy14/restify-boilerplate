import restify from "restify";
import routes from "./routes";
import logging from "./logging";
import config from "../config";

const logger = logging(config.logs);

const server = restify.createServer({
  name: 'restify-boilerplate',
});
const port = process.env.PORT || 3030;

server.use(restify.bodyParser());
server.use(restify.requestLogger());
server.on("after", restify.auditLogger({log: logger}));
// Routes for the application
routes(server);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
