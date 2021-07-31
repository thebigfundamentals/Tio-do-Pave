const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('@seald-io/nedb');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server running at ${port}`)
});

app.use(express.static('frontend'));

app.use(express.json({ limit: '1mb' }));

const jokesDb = new Datastore('jokesDb.db');
jokesDb.loadDatabase();


app.get('/api', (req, res) => {
    jokesDb.find({}, (err, data) => {
        res.json(data);
    })
});

app.post('/api', (req, res) => {
    const data = req.body;
    jokesDb.insert(data)
    console.log(data);
    res.json({
        status: 'Joke saved successfully.',
        data
    });
});

app.post('/keyword', (req, res) => {
    const data = req.body;
    const dataRegex = new RegExp(data.keyword, 'i');
    jokesDb.find({ line: dataRegex }, (err, jokes) => {
        res.json(jokes);
    })
});

app.get('/add',
    (req, res) => res.sendFile('frontend/add.html',
        { root: __dirname })
);

app.get('/all',
    (req, res) => res.sendFile('frontend/all.html',
        { root: __dirname })
);