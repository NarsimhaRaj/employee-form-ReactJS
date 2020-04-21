const service = require('../Services/service');

exports.getEmployees = (req, res) => {
   service.getEmployees(req, (err, data) => {
      if (!err)
         res.status(200).send(data);
      else
         res.status(404).send();
   })
};

exports.registerEmployee = (req, res) => {
   console.log(req.body);
   service.registerEmployee(req, (err, data) => {
      if (!err)
         res.status(200).send(data);
      else
         res.status(404).send();
   })
}

