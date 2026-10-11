const formulario = document.getElementById('formulario-tareas');
const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');
let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

// Renderizar tareas
function cargarTareas() {

    listaTareas.innerHTML = '';
    
    tareasGuardadas.forEach(tarea => {
        let li = document.createElement('li');
        li.textContent = tarea;
        listaTareas.appendChild(li);
    });

}

function guardarTarea(){

    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

}

function crearTarea(){

    let nuevaTarea = inputTarea.value.trim();

    if(!nuevaTarea) return;
    
    tareasGuardadas.push(nuevaTarea);
    guardarTarea();
    
    inputTarea.value = ''; // Limpiar campo
    cargarTareas();

}


// Guardar nueva tarea
formulario.addEventListener('submit', (evento) => {

    evento.preventDefault(); // Evita que la página se recargue

    crearTarea();

});

// Inicializar
cargarTareas();