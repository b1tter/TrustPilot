const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const PORT = 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use('/api', api);
app.get('/', (req, res) => {
  res.send('Hello from the server');
});

app.listen(PORT, function () {
  console.log('Server running on port: ' + PORT)
});
