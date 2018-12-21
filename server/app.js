const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');


const api = require('./routes/api');
const PORT = 8080;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api', api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get('/', (req, res) => {
  res.send('Hello from the server');
});

app.listen(PORT, function () {
  console.log('Server running on port: ' + PORT)
});
