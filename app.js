require('./dao/user')
const chalk = require('chalk');
const express = require('express')
const http = require('http')
var app = express();

const port = 3000;


app.listen(port, () => {

    console.log(chalk.green("server staed on port", port))
})

