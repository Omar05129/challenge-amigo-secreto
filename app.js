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
    actualizarLista("listaAmigos", amigos);
}

//Función para limpiar caja
function limpiarcaja(){
    document.querySelector("#amigo").value="";
}

//Función actualizar lista
function actualizarLista(ID, array){
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

//Función para sortear amigos
function sortearAmigo(){
    let numeroMaximo = amigos.length;
    //Validar que la lista de amigos no este vacia
    if (numeroMaximo==0){
        alert("No hay amigos para sortear");
        return;
    }
    //Generar indice aleatorio y obtener amigo secreto
    let indiceGenerado = Math.floor(Math.random()*numeroMaximo);
    let amigoSecreto = amigos[indiceGenerado];
    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    
   
}