const express = require('express');
const fs = require('file-system');
const bp = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('Hellow from the web server side...')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
