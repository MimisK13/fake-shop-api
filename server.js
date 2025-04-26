const express = require('express');
const app = express();

// Φόρτωση τοπικής "βάσης δεδομένων" από αρχείο JSON
const data = require('./db.json');

// Route για προϊόντα
app.get('/api/products', (req, res) => {
    res.json(data.products);
});

// Route για κατηγορίες
app.get('/api/categories', (req, res) => {
    res.json(data.categories);
});

// Export της Express εφαρμογής (χωρίς app.listen)
module.exports = app;
