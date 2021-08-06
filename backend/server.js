const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const employeeRouter = require('./routes/employee-route');
app.use('/employee', employeeRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

app.listen(port, () => {
    console.log(`server is running on ${port} .`)
})