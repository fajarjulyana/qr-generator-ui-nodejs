const express = require('express');
const qr = require('qrcode');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/generate', (req, res) => {
    const text = req.body.text;
    qr.toFile(__dirname + '/public/images/qr-code.png', text, (err) => {
        if (err) throw err;
        res.render('index', { text: text });
    });
});

// Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
