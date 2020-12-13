const express = require('express');
const router = express.Router();
const NameController = require("./../controllers/nameController");
const NameInstance = new NameController;



router.post('/', function(req, res, next) {
  NameInstance.addName(req, res)
});

module.exports = router;
