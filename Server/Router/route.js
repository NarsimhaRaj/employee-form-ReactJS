const express= require('express')
const router = express.Router();
const controller = require('../Controller/controller');

// SuccessStories  
router.get('/getEmployees',controller.getEmployees);
router.post('/registerEmployee',controller.registerEmployee);

module.exports = router;