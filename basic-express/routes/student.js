
const studentRoute = require("express").Router();
const StudentController = require("../controllers/StudentController.js");

studentRoute.get("/", StudentController.getAllStudents);

studentRoute.post("/create", StudentController.create);

studentRoute.get("/information/:studentId", StudentController.getInformation);
studentRoute.get("/delete/:studentId", StudentController.deleteStudent);
studentRoute.post("/update/:studentId", StudentController.updateStudent);
studentRoute.get("/search", StudentController.searchStudent)


module.exports = studentRoute;
