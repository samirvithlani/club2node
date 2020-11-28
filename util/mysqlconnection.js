const chalk = require('chalk')
const mysql = require('mysql')
//local database connectino...

const dbConn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'priyanka'
})
dbConn.connect(function(err,sucess){

    if(!err){

        console.log(chalk.green("DB Connected SucessFully.."))
    }
    else{

        console.log(chalk.red("Cant Connect to DATABASE."))
    }



})

module.exports =dbConn