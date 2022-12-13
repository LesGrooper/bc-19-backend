const Lecturer = require("../models/Lecturer.js");

class LecturerController {
  static getLecturers(req, res) {
    // res.send("Lecturer Page");
    Lecturer.getLecturers()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    // res.send(`create lecturer page`);

    Lecturer.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getInformation(req, res) {
    const id = Number(req.params.lecturerId);

    Lecturer.getInfromation(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteLecturer(req, res) {
    const id = Number(req.params.lecturerId);

    Lecturer.deleteLecturer(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static updateLecturer(req, res) {
    const id = Number(req.params.lecturerId);

    Lecturer.updateLecturer(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static searchLecturer(req, res) {
    console.log(req.query);
    Lecturer.searchLecturer(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LecturerController;
