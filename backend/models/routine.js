// requerimos la dependencia de mongoose para poder trabajar con mongodb

const mongoose = require('mongoose');

// Creo la trabla o schema del modelo que tiene las propiedades, se especifica si es string, booleano, numero, ect

const routineSchema = new mongoose.Schema({
    name: String,
    description: String,
    exercises: []
});

// exercises: [],

// Configuro la respuesta del usuario borrando el id, la version y la contraseña

routineSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});


// Le damos un nombre y lo asignamos a una propiedad

const Routine = mongoose.model('Routine', routineSchema);

// Lo exportamos

module.exports = Routine;