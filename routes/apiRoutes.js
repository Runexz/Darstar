var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/classroom", function(req, res) {
    db.Classroom.findAll({}).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  app.get("/api/classroom/:id", function(req, res) {
    var studentId = req.params.id;
    db.Classroom.findOne({}).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  // Create a new example
  app.post("/api/classroom", function(req, res) {
    db.Classroom.create(req.body).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });

  // Delete an example by id
  app.delete("/api/classroom/:id", function(req, res) {
    db.Classroom.destroy({ where: { id: req.params.id } }).then(function(dbClassroom) {
      res.json(dbClassroom);
    });
  });
};
