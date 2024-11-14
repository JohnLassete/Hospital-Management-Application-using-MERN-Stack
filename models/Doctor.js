const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const doctorModel = new Schema({
    name: {type: String, required: true},
    specialty: {type: String, required: true},
});
const Doctor = mongoose.model("Doctor", doctorModel);
module.exports = Doctor;