var express = require('express');
const app = require('../ws1/app');

var tradutorRouter = require('./routes/tradutor');

app.use(express.json());
app.use(tradutorRouter);

app.listen(3003);