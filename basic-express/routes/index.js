const route = require('express').Router();

route.get("/", (req, res) => {
  res.send("Hello World! asdf");
});

 //rounting /endpoint

const lecturerRoutes = require('./lecture');
const studentRoutes = require('./student');

route.use('/lectures', lecturerRoutes);
route.use('/students', studentRoutes);

module.exports = route;
