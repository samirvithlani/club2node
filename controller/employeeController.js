const express = require('express')
var app = express.Router()


app.get('/', (req, res) => {

    //res.sendRedirect("abcd.jsp");
    console.log("/ method called..")
    res.render('addEmployee')//addEmployee.hbs

})

app.post('/addemp', (req, res) => {

    console.log("post called...")
    res.render('addEmployee')

})

module.exports = app