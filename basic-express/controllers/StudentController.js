class StudentController {
    static getStudents(req, res) {
      res.send("Studentr Page");
    }
  
    static create(req, res) {
      res.send(`create Studentr page`);
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
  
  module.exports = StudentController;
  