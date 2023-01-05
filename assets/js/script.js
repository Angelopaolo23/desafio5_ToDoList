const btnAgregar = document.querySelector("#boton-agregar");
const inputTarea = document.querySelector("#input-tarea");
const tareasTotales = document.querySelector("#contador-total");
const tareasRealizadas = document.querySelector("#contador-realizadas");
const listaDeTareas = document.querySelector("#lista-tareas"); 

const tareas = [
    {
        "id": 1,
        "descripcion": "ESCRIBIR UNA NOVELA EN 10 MINUTOS",
        "completada": false
    },
    {
        "id": 2,
        "descripcion": "DAR DE BEBER A UN SEDIENTO",
        "completada": false
    },
    {
        "id": 3,
        "descripcion": "CRUZAR EN ROJO FRENTE AL PREVENCIONISTA",
        "completada": false
    }
];
//CONTADOR PARTE EN 3 YA QUE REQUISITO DE DESAFIO LATAM ES QUE PARTE CON 3 TAREAS INICIALES
let contadorId = 3;

function renderTareas () {
    let html = "";
    for (let tarea of tareas) {
        html += `
        <tr>
        <td class="h5">${tarea.id}</td>
        <td class="h5">${tarea.descripcion}</td>
        <td class="h5"><button class="rounded-circle bg-light" onclick="cambiarEstado(${tarea.id})">✓</button><button class="rounded-circle bg-danger" onclick="borrar(${tarea.id})">X</button></td>
        <td class="h5"></td>
        </tr>`;
    }
    listaDeTareas.innerHTML = html;
}

function actualizacionTotales () {
    tareasTotales.innerHTML = tareas.length;
    const tareasFiltradas = tareas.filter(tarea => tarea.completada == true);
    tareasRealizadas.innerHTML = tareasFiltradas.length;
}
function cambiarEstado(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas[index].completada = true;
    renderTareas()
    actualizacionTotales()
    alert(`Felicidades completaste la tarea "${tareas[index].descripcion}", van quedando menos!!`)
}
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas()
    actualizacionTotales()
}

btnAgregar.addEventListener("click", () => {
    if (inputTarea.value == ""){
        alert("Debes escribir una tarea en el espacio indicado para poder agregarla a la lista.")
    } else {
        const nuevaTarea = inputTarea.value;
        contadorId ++;
        tareas.push({id: contadorId, descripcion: nuevaTarea, completada: false});
        inputTarea.value = "";
        renderTareas();
        actualizacionTotales()
    }
})

//DESPLIEGUE DE 3 TAREAS INICIALES
renderTareas()


