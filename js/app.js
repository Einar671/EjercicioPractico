const formulario = document.getElementById('formulario-tareas');
const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Cargar tareas de localStorage al iniciar
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    listaTareas.innerHTML = '';
    tareasGuardadas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea;
        listaTareas.appendChild(li);
    });
}

// Guardar nueva tarea
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    
    const nuevaTarea = inputTarea.value;
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    
    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas)); // Uso de localStorage
    
    inputTarea.value = ''; // Limpiar campo
    cargarTareas(); // Actualizar vista
});

// Inicializar
cargarTareas();