const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

server.use((req, res, next) => setTimeout(() => next(), 2000));
server.use('/login', require('./login'));

server.listen(PORT, () => {
  console.log(`JSON server running at http:localhost:${PORT}`);
});
