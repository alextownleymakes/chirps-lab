const express = require('express');
const apiThing = require('./routes');
const cors = require('cors')
const app = express();
const path = require('path');

// app.get("/",(req,res, next) => {
//     res.send('it\'s workin')
// })

app.use(cors());
app.use(express.json());
app.use('/api', apiThing);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.get('/edit:id?', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/edit.html'));
});

app.get('/delete:id?', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/delete.html'));
});

app.listen(3000);
