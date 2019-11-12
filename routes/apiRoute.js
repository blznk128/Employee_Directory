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

    app.get("/api/employees/", (req, res) => {
        db.Employee.findAll({})
            .then((dbEmployee)=> {
                res.json(dbEmployee)
            });
    });

    app.get("/api/employees/:id", function(req, res) {
      db.Employee.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbEmployee) {
          res.json(dbEmployee);
        });
    });

    app.get("/api/lastName", function(req, res) {
      db.Employee.findAll({ order: [['last_Name', 'ASC']]})
        .then(function(dbEmployee) {
          res.json(dbEmployee);
        });
    });

    app.get("/api/wage", function(req, res) {
      db.Employee.findAll({ order: [['wage', 'ASC']]})
        .then(function(dbEmployee) {
          res.json(dbEmployee);
        });
    });

    app.get("/api/department", function(req, res) {
      db.Employee.findAll({ order: [['department', 'ASC']]})
        .then(function(dbEmployee) {
          res.json(dbEmployee);
        });
    });

    app.delete("/api/employees/:id", function(req, res) {
        db.Employee.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbEmployee) {
            res.json(dbEmployee);
          });
      });

    app.put("/api/employees", function(req, res) {
      db.Employee.update(req.body,
        {
           where: {
              id: req.body.id
            }
          })
          .then(function(dbEmployee) {
            res.json(dbEmployee);
          });
      });  
}