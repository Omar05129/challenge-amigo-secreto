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
}

//Función para limpiar caja
function limpiarcaja(){
    document.querySelector("#amigo").value="";
}