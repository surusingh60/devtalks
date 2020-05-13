const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening!', port);
});

app.get('/', async (req, res) => {
    res.send('Rotify!');
});

app.get('/hello', async (req, res) => {
    const name = req.query.name;
    const result = `Hello ${name}\n\n`;
    res.send(result);
});