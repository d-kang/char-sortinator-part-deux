const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const port = 3005;
const app = module.exports = express();
app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`http://localhost:${port}`))

require('./routes');
