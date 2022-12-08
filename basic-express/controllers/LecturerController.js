class LecturerController {
  static getLecturers(req, res) {
    res.send("Lecturer Page");
  }

  static create(req, res) {
    res.send(`create lecturer page`);
  }

  static getInformation(req, res) {
    const id = Number(req.params.userId);
    if (typeof id === "number" && isNaN(id) === false) {
      res.send(`information page ${id}`);
    } else {
      res.send(`id must a number!`);
    }
  }
}

module.exports = LecturerController;
