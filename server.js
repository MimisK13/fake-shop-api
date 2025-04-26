const express = require('express');
const app = express();
const db = require('./db.json');

app.use(express.json());

// Endpoints

app.get('/api/products', (req, res) => {
    res.json(db.products);
});

app.get('/api/categories', (req, res) => {
    res.json(db.categories);
});

// Αν έχεις public φάκελο με εικόνες κλπ:
app.use(express.static('public'));

module.exports = app; // 🔥 Το export θέλει το Vercel!
