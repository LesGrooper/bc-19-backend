const studentRoute = require("express").Router();
const StudentController = require("../controllers/StudentController.js");

studentRoute.get("/", StudentController.getStudents);

studentRoute.get("/create", StudentController.create);

studentRoute.get("/information/:userId", StudentController.getInformation);

module.exports = studentRoute;
