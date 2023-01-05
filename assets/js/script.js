//DEFINIR VARIABLES
const btnAgregar = document.querySelector("#boton-agregar");
const inputTarea = document.querySelector("#input-tarea");
const tareasTotales = document.querySelector("#contador-total");
const tareasRealizadas = document.querySelector("#contador-realizadas");
const listaDeTareas = document.querySelector("#lista-tareas"); 

const tareas = [];
let contador = 0;

function renderTareas () {
    let html = "";
    for (let tarea of tareas) {
        html += `<p class ="text-light">Id:${tarea.id}  ${tarea.descripcion} <button class="rounded-circle bg-light" onclick="cambiarEstado(${tarea.id})">✓</button><button class="rounded-circle bg-danger" onclick="borrar(${tarea.id})">X</button></p>`;
    }
    listaDeTareas.innerHTML = html;
}
/*function borrar (id){
    const index = tareas.findIndex((ele) => ele.id == id)
    invitados.splice(index, 1)
    renderTareas()
}*/

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value;
    contador ++;
    tareas.push({id: contador, descripcion: nuevaTarea, completada: false});
    inputTarea.value = "";
    console.log(tareas)
    renderTareas()

})





//FUNCION PARA CONTAR TOTALES Y REALIZADAS?