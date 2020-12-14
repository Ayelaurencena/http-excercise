const express = require('express');
const router = express.Router();
const NameController = require("./../controllers/nameController");
const NameInstance = new NameController();

/* método GET en la ruta "/" que nos va a devolver un array de nombres que vayamos agregando 
(al principio va a devolver un array vacio)*/

router.get('/', function(req, res, next) {
  NameInstance.getArray(req, res)
});

router.post('/add', function(req, res, next) {
  NameInstance.addName(req, res)
});

router.put('/modify/:index', function (req, res, next) {
   
  NameInstance.modifyName(req, res)
});

router.delete('/delete/:index', function (req, res, next) {
  NameInstance.deleteName(req, res)
})




module.exports = router;
