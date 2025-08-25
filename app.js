// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]; //Array para almacenar los nombres

//Función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    //console.log(amigo);
    if (amigo =="") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo);
        console.log(amigos);
    }
    limpiarcaja();
    asignarTextoElemento("listaAmigos", amigos);
}

//Función para limpiar caja
function limpiarcaja(){
    document.querySelector("#amigo").value="";
}

//Función asignar texto elemento
function asignarTextoElemento(ID, array){
    //Obtener el elemento de la lista
    let lista = document.getElementById(ID);
    //Limpiar la lista existente
    lista.innerHTML="";
    //Agregar elementos a la lista
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li"); // crear un <li>
        li.textContent = array[i];             // ponerle el nombre del amigo
        lista.appendChild(li);                 // añadirlo al <ul>
    }
    
}