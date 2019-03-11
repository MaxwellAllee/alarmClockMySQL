var path = require("path");
require('dotenv').config()

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.DB,
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: process.env.DBU,
    // Your password
    password: process.env.DB_PASS,

    database: "alarmClockDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});
module.exports = function (app) {
    app.post("/api/addAlarm", function (req, res) {
        console.log(req.body)
        let query = connection.query(
            "INSERT INTO alarms SET ?",
            req.body,
            function (err, ) {
                response()
            }
        )
        response = () => {
            return res.json()
        }
    });
    
        app.post("/api/lookUpAlarm", function (req, res) {
            
            console.log(req.body)
            let query = connection.query("SELECT * FROM alarms ", function (err, result, fields) {
                respon(result)
            }
            )
            respon = (result) => {
                return res.json(result)
            }
        });
    
};