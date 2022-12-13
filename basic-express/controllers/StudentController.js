const Student = require("../models/Student.js");

class StudentController {
  static getAllStudents(req, res) {
    // res.send("Student Page");
    Student.getAllStudents()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    // res.send(`create Student page`);

    Student.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getInformation(req, res) {
    const id = Number(req.params.studentId);

    Student.getInfromation(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteStudent(req, res) {
    const id = Number(req.params.studentId);

    Student.deleteStudent(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static updateStudent(req, res) {
    const id = Number(req.params.studentId);

    Student.updateStudent(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static searchStudent(req, res) {
    console.log(req.query);
    Student.searchStudent(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = StudentController;