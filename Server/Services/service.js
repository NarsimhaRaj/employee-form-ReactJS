const Employee = require('../Models/employee');

// gets all Success stories
exports.getEmployees = (req, callback) => {
    Employee.find().exec().then(employees => {
        callback(null, employees)
    }).catch(err => callback(err))
}

// adds a new SuccessStory
exports.registerEmployee = (req, callback) => {
    var employee = {
        name: req.body.name,
        id:req.body.id,
        email:req.body.email,
        designation:req.body.designation,
        companyName:req.body.companyName,
        companyAddress:req.body.companyAddress,
        companyContact:req.body.companyContact,
        gender:req.body.gender,
        DOB:req.body.DOB,
        homeAddress:req.body.homeAddress,
        homeContact:req.body.homeContact,
        maritalStatus:req.body.maritalStatus,
    }
    let emp = new Employee(employee)
    emp.save().then(data => {
        callback(null, data)
    })
    .catch(err => {
        callback(err)
    });
}