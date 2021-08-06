const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    DateOfJoining: {
        type: Date,
        required: true
    },
    Photo: {
        type: String
    },
    ContactNo: {
        type: String,
        required: true
    },
    EmployeeCode: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;