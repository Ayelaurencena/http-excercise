class NameController {

/* método GET en la ruta "/" que nos va a devolver un array de nombres que vayamos agregando 
(al principio va a devolver un array vacio)*/
    setArray (req, res) {

        const nameArray = []
        const { name } = req.query;
        nameArray.push(name);

        res.json(nameArray)
    }

    /* Agregar una variable 'name' al array del que hablamos en el primer endpoint. 
    La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal 
    (un ejemplo de que salga todo mal es que llegue vacío 'name')
    */  

    addName (req, res) {

        const nameArray = [];
        const namePair = {} ;
        const { name } = req.query;

        if (name) {
            namePair.nombre = name
            nameArray.push(namePair);
            res.status(200).json(nameArray);
        } else {
            res.status(400).send("Formato no aceptado");

        }

    
    }
 }

module.exports = NameController;
