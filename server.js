const express = require('express');
const fs = require('file-system');
const bp = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next) => {
    console.log(req.url);
    next();    
})
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from the web server side...');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
