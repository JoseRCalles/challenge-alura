// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById('amigo');
let amigos = [];

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
    }

}
