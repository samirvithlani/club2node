require('./dao/user')
const chalk = require('chalk');
const express = require('express')
const http = require('http')
var app = express();
const employee = require('./controller/employeeController')
var user = require('./controller/userController')
const port = 3000;
const bodyparser = require('body-parser')

app.set('view engine', 'hbs')
app.use(bodyparser.urlencoded({
    extended: true
}))
//app.use('/employee', employee)
app.use('/',user)

app.listen(port, () => {

    console.log(chalk.green("server staed on port", port))
})

