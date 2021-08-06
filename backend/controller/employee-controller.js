let Employee = require('../models/employee')
//getallEmployees
const getallEmployees = (req, res, next) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json(`Error: ${err}`))
}
//getEmployee
const getEmployee = (req, res, next) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json(`Error: ${err}`))
}
//addEmployee
const addEmployee = (req, res, next) => {
    const empData = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Username: req.body.Username,
        Password: req.body.Password,
        Gender: req.body.Gender,
        DOB: Date.parse(req.body.DOB),
        DateOfJoining: Date.parse(req.body.DateOfJoining),
        Photo: req.body.Photo,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode,
    }
    const newEmployee = new Employee(empData)
    newEmployee.save()
        .then(() => res.json({
            message: "User Added !."
        }))
        .catch(err => res.status(400).json('Error : ' + err))
}

//updateEmployee
const updateEmployee = (req, res, next) => {
    Employee.findById(req.params.id)
        .then(emp => {
            emp.FirstName = req.body.FirstName;
            emp.LastName = req.body.LastName;
            emp.Email = req.body.Email;
            emp.Username = req.body.Username;
            emp.Gender = req.body.Gender;
            emp.DOB = Date.parse(req.body.DOB);
            emp.DateOfJoining = Date.parse(req.body.DateOfJoining);
            emp.Photo = req.body.Photo;
            emp.ContactNo = req.body.ContactNo;
            emp.EmployeeCode = req.body.EmployeeCode;

            emp.save()
                .then(() => res.json({
                    message: "Employee details updated"
                }))
                .catch(err => res.status(400).json('Error : ' + err))
        })
        .catch(err => res.status(400).json('Error : ' + err))
}

//deleteEmployee
const deleteEmployee = (req, res, next) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json({
            message: "Employee deleted !."
        }))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

module.exports = {
    getallEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}