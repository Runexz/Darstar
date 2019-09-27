var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Classroom.findAll({}).then(function (dbClassroom) {
      res.json(dbClassroom);
    });
  });

  // Load example page and pass in an example by id
  app.get("/Classroom/:id", function (req, res) {
    db.Classroom.findOne({ where: { id: req.params.id } }).then(function (dbClassroom) {
      res.json(dbClassroom)
    });
  });
};
