const express = require('express');
const fs = require('file-system');
const bp = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
    const fileName = 'userinfo.json';
    fs.appendFile(fileName, JSON.stringify(req.body), () =>
        console.log(`${fileName} written`)
    );
    res.send("Your identity has been stolen... You shouldn't have trusted us");
});

app.get('/formsubmissions', (req, res) => {
    fs.readFile(
        `${__dirname}/userinfo.json`,
        { encoding: 'utf8' },
        (err, data) => {
            res.json(JSON.parse(data));
        }
    );
});

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
