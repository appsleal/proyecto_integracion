const express = require("express");
const router = require("./routes/index.routes");
var bodyParser = require('body-parser')

const app = express();

require('./database')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

app.listen(3554);
console.log('Server on port 3554');