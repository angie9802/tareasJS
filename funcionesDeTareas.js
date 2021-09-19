
const fs = require('fs');


let archivoTareas = { //objeto con metodos
    archivo: 'tareas.json', // atributo correspondiente al archivo json
    leerJSON: function () { //método para leer el archivo atributo
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8')); //lee archivo atributo y lo convierte a objeto literal
    },

}
function escribirJSON(array){// metodo para escribir en el archivo json
     // convierte el objeto a texto con formato JSON
    fs.writeFileSync('tareas.json',JSON.stringify(array)) //agrega el texto JSON en el archivo json
}

function guardarTarea(tarea){//metodo para guardar tarea en el archivo json
    // lee y guarda en una lista el contenido del archivo json
    //agrega la tarea-parametro a la lista
    escribirJSON(archivoTareas.leerJSON().push(tarea))//agrega la lista al archivo json
    console.log("Tarea guardada con exito")//imprime mensaje para confirmar que se guardó
}


let filtrarPorEstado=(estado) =>{
    
    return archivoTareas.leerJSON().filter(tarea=> 
         tarea.estado == estado
    );
   
}

module.exports = {archivoTareas, escribirJSON, guardarTarea, filtrarPorEstado};

