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

const express = require('express');
const app = express();
const db = require('./db.json'); // Φορτώνουμε τα δεδομένα σαν JSON

// Simple routes
app.get('/api/products', (req, res) => {
    res.json(db.products);
});

app.get('/api/categories', (req, res) => {
    res.json(db.categories);
});

// Optional: Serve static files from /public if θες
app.use(express.static('public'));

module.exports = app;
