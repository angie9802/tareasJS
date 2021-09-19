const logic= require('./funcionesDeTareas')

let opciones = process.argv[2]

let argCrear = {
    titulo : process.argv[3],
    estado : process.argv[4]
}
function ejecutarMenu(opcion){
    switch(opcion){
        case "listar":
            logic.archivoTareas.leerJSON().forEach((tarea,i)=>
                console.log("T "+ i + " : "+tarea.titulo+" - E : "+ tarea.estado)
            )
            break;
        case "crear":
            let tarea = {
                titulo : argCrear.titulo,
                estado : argCrear.estado
            }
            logic.guardarTarea(tarea)
            break;
        case "filtrar":
        let estado = process.argv[3]
        console.log('Listado de tareas filtradas');
        logic.filtrarPorEstado(estado).forEach(function(tareaf,i){
            console.log("T"+ i + " : "+tareaf.titulo+" - E: "+ tareaf.estado);
            })
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción");
            break;
        default:
            console.log("No entiendo qué quieres hacer");
    }
}
 ejecutarMenu(opciones)