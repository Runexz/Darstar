var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/classrooms", function(req, res) {
    db.Classrooms.findAll({}).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

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

  // Create a new example
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
