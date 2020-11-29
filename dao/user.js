//est connection..
const chalk = require('chalk');
const dbConn = require('../util/mysqlconnection')
//dbconn connection...

function insertuser() {

    dbConn.query("insert into user(username,useremail,userpassword,cityid)values('samir','samir@gmail.com','sam13',1)", (err, res) => {

        if (!err) {

            console.log("Raws inserted..", res)
        }
        else {

            console.log("data not iserted..")

        }

    })

}
function selectuser() {

    var sql = "select * from user";
    dbConn.query(sql, (err, data) => {

        if (!err) {

            console.log(data)
        }
        else {

            console.log(chalk.red("red"))
        }
    })


}
function deleteuser(name) {


    var sql = "delete from user where username = '" + name + "'"

    dbConn.query(sql, (err, sucess) => {

        if (!err) {


            console.log(sucess)
        }
        else {

            console.log("error..", err)
        }
    })

}
//insertuser()
//selectuser();
//deleteuser("samir")