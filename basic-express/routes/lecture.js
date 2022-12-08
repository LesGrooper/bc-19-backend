const lectureRoute = require("express").Router();
const LecturerController = require("../controllers/LecturerController.js");

lectureRoute.get("/", LecturerController.getLecturers);

lectureRoute.get("/create", LecturerController.create);

lectureRoute.get("/information/:userId", LecturerController.getInformation);

module.exports = lectureRoute;
