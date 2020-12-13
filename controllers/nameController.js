class NameController {

/* método GET en la ruta "/" que nos va a devolver un array de nombres que vayamos agregando 
(al principio va a devolver un array vacio)*/
    setArray (req, res) {

        const nameArray = []
        const { name } = req.query;
        nameArray.push(name);

        res.json(nameArray)
    }
   
}

module.exports = NameController;
