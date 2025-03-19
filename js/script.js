// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo").value.trim();

    if (input === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(input);
    document.getElementById("amigo").value = ""; // Limpiar el input
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong></li>`;
}
