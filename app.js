// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const cajaResultado = document.getElementById('resultado');
const añadirAmigo = document.querySelector('.button-add');
let amigos = [];
let valorInicial = ''

inputAmigo.addEventListener('keyup', (e)=>{
    if (inputAmigo.value !== valorInicial){
        añadirAmigo.classList.add('key-up');
    }
    else{
        añadirAmigo.classList.remove('key-up');
    }
})


let agregarAmigo = () => {
    let valorAmigo = inputAmigo.value.toLowerCase().trim();
    if(valorAmigo === ''){
        alert('Por favor, ingresa un nombre al campo');
    }
    else if(amigos.indexOf(valorAmigo) !== -1){
        alert('Este amigo ya existe');
    }
    else{
        amigos.push(valorAmigo);
        inputAmigo.value = '';
        añadirAmigo.classList.remove('key-up');
        actualizarAmigos();
    }

}


let actualizarAmigos = () => {
    listaAmigos.innerHTML = ''

    for(i=0; i<amigos.length; i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo); 
    }
}


let sortearAmigo = () => {
    if(amigos.length === 0){
        alert("No tienes amigos agregados");
    }
    else{
        let amigoSecreto = document.createElement('p');
        amigoSecreto.textContent = amigos[Math.floor(Math.random() * amigos.length) + 1];
        cajaResultado.appendChild(amigoSecreto);
    }
}

