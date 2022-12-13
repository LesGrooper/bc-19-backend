const fs = require("fs");

class Lecturer {
  constructor(id, name, subject, age, city) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.city = city;
  }

  static getLecturers() {
    return new Promise((resolve, reject) => {
      fs.readFile("./lecturers.json", "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let lecturers = JSON.parse(data);
          lecturers = lecturers.map((lecturer) => {
            const { id, name, subject, age, city } = lecturer;
            return new Lecturer(id, name, subject, age, city);
          });
          resolve(lecturers);
        }
      });
    });
  }

  static getInfromation(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturers()
        .then((result) => {
          let lecture = result;
          let findOneLecturer = lecture.filter(
            (lecturer) => lecturer.id === id
          );
          if (findOneLecturer.length !== 0) {
            resolve(findOneLecturer[0]);
          } else {
            throw {
              message: `Lecturer with ${id} not found!`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturers()
        .then((result) => {
          let lecturers = result;
          const id = lecturers[lecturers.length - 1].id + 1;
          const { name, subject, age, city } = lecturer;

          lecturers.push(new Lecturer(id, name, subject, age, city));
          this.saveLecturer(lecturers);
          resolve(`Lecturer has been aded`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static deleteLecturer(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturers()
        .then((result) => {
          let lecturers = result;

          lecturers = lecturers.filter((lecturer) => lecturer.id !== id);

          if (!lecturers) {
            throw {
              message: err,
            };
          } else {
            this.saveLecturer(lecturers);
            resolve(`Lecturer with ${id} has been deleted`);
          }
        })
        .catch((err) => {
          reject(`Nomor tidak ada`, err);
        });
    });
  }

  static updateLecturer(lecturerId, lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturers()
        .then((result) => {
          let lecturers = result;
          const { name, subject, age, city } = lecturer;
          lecturers = lecturers.map((lecturer) => {
            if (lecturer.id === lecturerId) {
              lecturer.name = name;
              lecturer.subject = subject;
              lecturer.age = age;
              lecturer.city = city;
            }
            return lecturer;
          });
          this.saveLecturer(lecturers);
          resolve(`Lecturers with ${lecturerId} has updated`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static searchLecturer(seachQuery) {
    return new Promise((resolve,reject) => {
      this.getAllLecturers().then((result) => {
        let lecturers = result;
        const { name } = seachQuery;

        let findOneLecturer = lecturers.filter((lecturer) => lecturer.name === name);

        resolve(findOneLecturer[0]);

      }).catch((err) => reject(err))
    })
  }

  static saveLecturer(lecturers) {
    fs.writeFileSync("./lecturers.json", JSON.stringify(lecturers, null, 3));
  }
}

module.exports = Lecturer;

