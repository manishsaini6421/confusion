const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const port = process.env.PORT || 3001;

server.use(router);
server.listen(port);