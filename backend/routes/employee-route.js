const express = require('express');

const router = express.Router();
const employeeController = require('../controller/employee-controller');

router.get('/', employeeController.getallEmployees);
router.get('/getEmployee/:id', employeeController.getEmployee);
router.post('/addEmployee', employeeController.addEmployee);
router.post('/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;