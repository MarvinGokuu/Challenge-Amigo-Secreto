let nombresAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); //trim para eliminar espacios al inicio y al final
    // Validar que el campo no esté vacío
    if (nombre== '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa un nombre.',
            confirmButtonText: 'Aceptar'
        });
        return; // Salir de la función si el campo está vacío
    }

    // Validar que el nombre no esté ya en la lista
    if (nombresAmigos.includes(nombre)) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre repetido',
            text: 'Este nombre ya está en la lista.',
            confirmButtonText: 'Aceptar'   
        });
        limpiarCampo();
        return;  // Salir de la función si el nombre ya existe
    }

    // Agregar el nombre a la lista de amigos
        nombresAmigos.push(nombre);
        limpiarCampo(); // Limpiar el campo de entrada después de agregar
        mostrarAmigos();    
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de mostrarla

    // Recorrer el array de nombres y crear un elemento de lista para cada uno
    nombresAmigos.forEach(function(amigo) { 
        let li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el nombre del amigo al contenido del elemento
        listaAmigos.appendChild(li); // Agregar el elemento a la lista
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que la lista no esté vacía
       if (nombresAmigos.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Lista vacía',
            text: 'No hay amigos en la lista para sortear.',
            confirmButtonText: 'Aceptar'
        });
        return; // Salir de la función si la lista está vacía
    }

    // Generar un índice aleatorio basado en la longitud del array
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado

    // Mostrar el resultado del sorteo usando SweetAlert
    Swal.fire({
        icon: 'success',
        title: '¡Amigo secreto!',
        text: `El amigo secreto sorteado es: ${amigoSorteado}`,
        confirmButtonText: 'Aceptar'
    });
    limpiarLista(); // Limpiar la lista de amigos después de sortear
}

//Función para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    nombresAmigos = []; // Vaciar el array de amigos
    listaAmigos.innerHTML = ''; // Limpiar la lista visualmente
}

// Eventos
// Evento para agregar amigo al presionar Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el comportamiento por defecto del Enter
        agregarAmigo(); // Llamar a la función para agregar amigo
    }
});