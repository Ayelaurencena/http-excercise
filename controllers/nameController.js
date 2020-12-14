class NameController {

    constructor () {
        this.names = []
    }

    getArray (req, res) {
        res.send(this.names);
    };


    addName (req, res) {
        const { body } = req;

        if (body.name) {  
            this.names.push(body.name);
            console.log(this.names);
            res.status(200).send("Nombre agregado con exito");
        } else {
            res.status(400).send("Formato no aceptado");
        }

    };

    /* enviaremos un número de índice que representa la posición del array de nombres que queremos modificar. 
    También deberá recibir el nuevo valor a ser ingresado. 
La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal 
(un ejemplo de que salga todo mal es que llegue vacío 'name') */

    modifyName (req, res) {
        const { id } = req.params;
        const { name } = req.query;
        this.names.splice(id, 1, name);
            
        res.send('Entrada modificada correctamente')
    }

    /* método DELETE en la ruta /delete/:indice, y en el cual enviaremos un número de índice que representa 
        la posición del array de nombres que queremos borrar. */

    deleteName (req,res) {
        const { index } = req.params;
        this.names.splice(index, 1)

        res.send('La entrada ha sido borrada correctamente')
    }
 }

module.exports = NameController;
