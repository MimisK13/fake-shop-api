// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults({
//     static: 'public'
// });
// const routes = require('./routes.json');
// const rewriter = jsonServer.rewriter(routes);
//
// server.use(middlewares);
// server.use(rewriter);
// server.use(router);
//
// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//     console.log(`🚀 JSON Server running at http://localhost:${port}`);
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
    static: 'public'
});

server.use(middlewares);
server.use(router);

module.exports = server; // 👈 Αντί να κάνεις server.listen, κάνε export
