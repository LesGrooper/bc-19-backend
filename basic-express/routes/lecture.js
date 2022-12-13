const lectureRoute = require("express").Router();
const LecturerController = require("../controllers/LecturerController.js");

lectureRoute.get("/", LecturerController.getLecturers);

lectureRoute.post("/create", LecturerController.create);

lectureRoute.get("/information/:lecturerId", LecturerController.getInformation);
lectureRoute.get("/delete/:lecturerId", LecturerController.deleteLecturer);
lectureRoute.post("/update/:lecturerId", LecturerController.updateLecturer);
lectureRoute.get("/search", LecturerController.searchLecturer)


module.exports = lectureRoute;
