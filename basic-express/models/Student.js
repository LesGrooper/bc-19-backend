const fs = require("fs");

class Student {
  constructor(id, name, major, semester, city) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.semester = semester;
    this.city = city;
  }

  static getAllStudents() {
    return new Promise((resolve, reject) => {
      fs.readFile("./students.json", "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let student = JSON.parse(data);
          student = student.map((student) => {
            const { id, name, major, semester, city } = student;
            return new Student(id, name, major, semester, city);
          });
          resolve(student);
        }
      });
    });
  }

  static getInfromation(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          let findOneStudent = students.filter((student) => student.id === id);
          if (findOneStudent.length !== 0) {
            resolve(findOneStudent[0]);
          } else {
            throw {
              message: `Student with ${id} not found!`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(student) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          const id = students[students.length - 1].id + 1;
          const { name, major, semester, city } = student;

          students.push(new student(id, name, major, semester, city));

          // console.log(students);
          this.saveStudent(students);
          resolve(`Student has been aded`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static deleteStudent(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;

          students = students.filter((student) => student.id !== id);

          if (!students) {
            throw {
              message: err,
            };
          } else {
            this.saveStudent(students);
            resolve(`Student with ${id} has been deleted`);
          }
        })
        .catch((err) => {
          reject(`Nomor tidak ada`, err);
        });
    });
  }

  static updateStudent(studentId, student) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = student;
          students = students.map((student) => {
            if (student.id === studentId) {
              student.name = name;
              student.major = major;
              student.semester = semester;
              student.city = city;
            }
            return student;
          });
          this.saveStudent(student);
          resolve(`Student with ${studentId} has updated`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static searchStudent(seachQuery) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          const { name } = seachQuery;

          let findOneStudent = students.filter(
            (student) => student.name === name
          );

          resolve(findOneStudent[0]);
        })
        .catch((err) => reject(err));
    });
  }

  static saveStudent(students) {
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 3));
  }
}

module.exports = Student;
