const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const port = 3005;


const app = express();
app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/sort', (req, res) => {
  console.log('req', req.body);
  const { payload } = req.body;

  

  res.send(req.body)
})

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`http://localhost:${port}`))
