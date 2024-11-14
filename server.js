const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctor')
const appointmentsRouter = require('./routes/appointment');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/hospital");
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});