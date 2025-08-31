const mongoose = require("mongoose");
const student = mongoose.Schema({

});

const studentModel = mongoose.model("Student" , student);
module.exports  = studentModel;
