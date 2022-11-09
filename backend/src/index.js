const express = require("express");

const app = express();

require('./database')

app.listen(3554);;
console.log('Server on port 3554');