var db = require("../models");

module.exports = (app) => {
    app.post("/api/employee", (req, res) => {
        db.Employee.create(
            req.body
        )
        .then((dbEmployee) => {
            res.json(dbEmployee)
            console.log("this is dbEmployee: " , dbEmployee)
        })
    });
}