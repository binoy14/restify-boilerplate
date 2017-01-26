import restify from "restify";

const server = restify.createServer({
  name: 'rtsupportserver'
});

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(3002);
