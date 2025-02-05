let amigos = [];

function agregarAmigo() {
    let ingreso =document.getElementById("amigo");
    let nombre = ingreso.value.trim();

    if (nombre === "") {
        alert ('Por favor, inserte un nombre');
        return;
    }

        amigos.push(nombre);
        //Limpia la entrada
        ingreso.value = ""; 
     mostrarLista();

     document.getElementById("listaAmigos").style.display = "block"
}

function mostrarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo=> {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo () {
    if (amigos.length == 0) {
        alert('No hay más amigos en la lista para sortear')
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    //Elimina el nombre ya sorteado de la lista
    amigos.splice(indiceAleatorio, 1);
    //Refleja el cambio en la lista
    mostrarLista(); 

    //Esconde la lista después de sortear
    document.getElementById("listaAmigos").style.display = "none"
}