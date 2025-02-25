// Array para almacenar nombres agregados
let amigos = [];
let amigosSorteados = []; // Lista de amigos ya sorteados

// Función para ir agregando amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Verificar que el campo de amigo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor insertar un nombre!");
        return;
    }

    // Verificar que el nombre no se repita (sin importar mayúsculas o minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert(`El nombre "${nombreAmigo}" ya se encuentra en la lista. Por favor ingresa otro nombre.`);
        return;
    }

    // Agregar amigos al array
    amigos.push(nombreAmigo);

    // Actualizar la lista en HTML
    actualizarLista();

    // Limpiar campo de entrada
    inputAmigo.value = "";

    // Habilitar el botón de sorteo si hay al menos un amigo en la lista
    document.getElementById("btnSortear").disabled = false;
}

// Función para actualizar la lista en la página
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar el contenido de la lista
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
    // Verificar si hay amigos disponibles para sorteo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres a la lista.");
        return;
    }

    // Verificar si todos los amigos ya fueron sorteados
    if (amigosSorteados.length === amigos.length) {
        alert("¡Todos los amigos han sido sorteados! Reinicia el sorteo si deseas jugar de nuevo.");
        document.getElementById("btnSortear").disabled = true; // Deshabilitar botón de sorteo
        return;
    }

    let amigoSorteado;
    do {
        // Generar índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado)); // Evitar repetir sorteos

    // Agregar amigo a la lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Mostrar resultado en la página
    const resultado = document.getElementById("resultado");
    if (!resultado) {
        console.error("Elemento 'resultado' no encontrado.");
        return;
    }
    resultado.innerHTML = `Amigo sorteado: <li>${amigoSorteado}</li>`;
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Limpiar el array de amigos
    amigos = [];

    // Limpiar el array de amigos sorteados (si lo tienes)
    amigosSorteados = [];

    // Limpiar el contenido de la lista en la página
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Habilitar el botón de sorteo si estaba deshabilitado
    const btnSortear = document.getElementById("btnSortear");
    btnSortear.disabled = false;
}


// Asignar eventos a los botones cuando cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAgregar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
    document.getElementById("btnReiniciar").addEventListener("click", reiniciarSorteo);
});
