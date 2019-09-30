var db = require("../models");

module.exports = function(app) {
  // Get all students in classrooms
  app.get("/api/classrooms", function(req, res) {
    db.Classrooms.findAll({}).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  //Get one id from classrooms
  app.get("/api/classrooms/:id", function(req, res) {
    db.Classrooms.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbClassroom) {
      console.log(dbClassroom);
      res.json(dbClassroom);
    });
  });

  // modify existing student in classrooms
  app.put("/api/classrooms/:id", function(req, res) {
    db.Classrooms.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  // Create a new student in classrooms
  app.post("/api/classrooms", function(req, res) {
    db.Classrooms.create(req.body).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  // Delete an example by id
  app.delete("/api/classrooms/:id", function(req, res) {
    db.Classrooms.destroy({ where: { id: req.params.id } }).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });
};
