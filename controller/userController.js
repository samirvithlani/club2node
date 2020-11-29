const chalk = require('chalk')
const express = require('express')
var app = express.Router()
const dbConn = require('../util/mysqlconnection')

app.get('/', (req, res) => {

    console.log(chalk.yellow("called..."))
    res.render('addUser')
})

app.post('/add', (req, res) => {

    userinsert(req, res)
})

function userinsert(req, res) {
    var username = req.body.name
    var email = req.body.email
    var age = req.body.age

    var sql = "insert into user11(uname,uemail,uage)values('" + username + "','" + email + "'," + age + ")"
    dbConn.query(sql, (err, success) => {

        if (!err) {

            console.log("data inserted..", success)
            res.send("data inserted..")
        }
        else {

            console.log("data not inserted..")
            res.send("data not inserted...")
        }
    })

}
module.exports = app

